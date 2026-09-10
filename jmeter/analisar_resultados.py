#!/usr/bin/env python3
"""
Le os relatorios HTML gerados pelo JMeter (um por cenario, em
resultados/html_<N>/statistics.json) e monta uma tabela comparativa
no mesmo formato do relatorio original "Do Benchmark ao Modelo",
para facilitar colar direto no novo relatorio.

Uso:
    python analisar_resultados.py <pasta_resultados>

Espera encontrar, dentro de <pasta_resultados>, uma subpasta html_<N>
por cenario (N = numero de usuarios/threads), cada uma com um
statistics.json gerado por "jmeter -e -o ...".
"""
import json
import re
import sys
from pathlib import Path


def carregar_cenario(html_dir: Path):
    stats_path = html_dir / "statistics.json"
    if not stats_path.exists():
        return None
    with open(stats_path, encoding="utf-8") as f:
        data = json.load(f)
    total = data.get("Total")
    if not total:
        return None
    return total


def fmt(v, casas=1):
    if v is None:
        return "-"
    return f"{v:.{casas}f}".replace(".", ",")


def main():
    if len(sys.argv) < 2:
        print("Uso: python analisar_resultados.py <pasta_resultados>")
        sys.exit(1)

    base = Path(sys.argv[1])
    cenarios = []
    for html_dir in sorted(base.glob("html_*")):
        m = re.match(r"html_(\d+)", html_dir.name)
        if not m:
            continue
        n_usuarios = int(m.group(1))
        total = carregar_cenario(html_dir)
        if total is None:
            print(f"[aviso] statistics.json nao encontrado/valido em {html_dir}")
            continue
        cenarios.append((n_usuarios, total))

    if not cenarios:
        print("Nenhum cenario encontrado. Rode rodar_cenarios.bat primeiro.")
        sys.exit(1)

    cenarios.sort(key=lambda c: c[0])

    linhas = []
    header = ["Usuarios", "Amostras", "Media(ms)", "Mediana", "P90", "P95", "P99",
              "Min", "Max", "Erro(%)", "Vazao(req/s)", "KB/s", "SentKB/s"]
    linhas.append(header)

    for i, (n, total) in enumerate(cenarios, start=1):
        linhas.append([
            f"C{i} ({n})",
            str(total.get("sampleCount", "-")),
            fmt(total.get("meanResTime")),
            fmt(total.get("medianResTime")),
            fmt(total.get("pct1ResTime")),
            fmt(total.get("pct2ResTime")),
            fmt(total.get("pct3ResTime")),
            fmt(total.get("minResTime")),
            fmt(total.get("maxResTime")),
            fmt(total.get("errorPct"), 2),
            fmt(total.get("throughput"), 2),
            fmt(total.get("receivedKBytesPerSec"), 2),
            fmt(total.get("sentKBytesPerSec"), 2),
        ])

    larguras = [max(len(row[i]) for row in linhas) for i in range(len(header))]

    def imprime_linha(row):
        print(" | ".join(v.ljust(larguras[i]) for i, v in enumerate(row)))

    print("\n=== Tabela comparativa (regime permanente, base populada) ===\n")
    imprime_linha(linhas[0])
    print("-+-".join("-" * w for w in larguras))
    for row in linhas[1:]:
        imprime_linha(row)

    # CSV para colar em planilha / relatorio
    csv_path = base / "tabela_comparativa.csv"
    with open(csv_path, "w", encoding="utf-8") as f:
        for row in linhas:
            f.write(";".join(row) + "\n")
    print(f"\nCSV salvo em: {csv_path}")

    # Grafico opcional (usuarios x vazao, usuarios x tempo medio)
    try:
        import matplotlib
        matplotlib.use("Agg")
        import matplotlib.pyplot as plt

        usuarios = [c[0] for c in cenarios]
        vazao = [c[1].get("throughput", 0) for c in cenarios]
        media = [c[1].get("meanResTime", 0) for c in cenarios]

        fig, ax1 = plt.subplots(figsize=(8, 5))
        ax1.set_xlabel("Usuarios simultaneos")
        ax1.set_ylabel("Vazao (req/s)", color="tab:blue")
        ax1.plot(usuarios, vazao, marker="o", color="tab:blue", label="Vazao")
        ax1.tick_params(axis="y", labelcolor="tab:blue")

        ax2 = ax1.twinx()
        ax2.set_ylabel("Tempo medio (ms)", color="tab:red")
        ax2.plot(usuarios, media, marker="s", color="tab:red", label="Tempo medio")
        ax2.tick_params(axis="y", labelcolor="tab:red")

        plt.title("Usuarios x Vazao x Tempo medio (regime permanente)")
        fig.tight_layout()
        out_png = base / "usuarios_vs_vazao_tempo.png"
        fig.savefig(out_png, dpi=120)
        print(f"Grafico salvo em: {out_png}")
    except ImportError:
        print("(matplotlib nao instalado - pulei a geracao do grafico; a tabela/CSV ja bastam)")


if __name__ == "__main__":
    main()
