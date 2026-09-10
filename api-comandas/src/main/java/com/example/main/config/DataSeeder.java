package com.example.main.config;

import com.example.main.model.Mesa;
import com.example.main.model.Pedido;
import com.example.main.model.StatusComandaEnum;
import com.example.main.repository.MesaRepository;
import com.example.main.repository.PedidoRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

/**
 * Popula o banco "comandas" com dados ficticios para permitir testes de
 * carga (JMeter) realistas e desenvolvimento local.
 *
 * So executa se as tabelas estiverem vazias (idempotente). Pode ser
 * desligado via a propriedade "app.seed.enabled=false".
 */
@Component
public class DataSeeder implements CommandLineRunner {

    private static final Logger log = LoggerFactory.getLogger(DataSeeder.class);

    private final MesaRepository mesaRepository;
    private final PedidoRepository pedidoRepository;

    @Value("${app.seed.enabled:true}")
    private boolean seedEnabled;

    @Value("${app.seed.mesas:30}")
    private int quantidadeMesas;

    @Value("${app.seed.pedidos:500}")
    private int quantidadePedidos;

    private static final String[] GARCONS = {
            "Ana Souza", "Bruno Lima", "Carla Dias", "Diego Alves", "Elaine Rocha",
            "Fabio Nunes", "Gabriela Melo", "Heitor Castro", "Isadora Reis", "Joao Pedro"
    };

    private static final String[] ITENS = {
            "Feijoada", "Picanha na chapa", "Moqueca de peixe", "Risoto de camarao",
            "Salada Caesar", "Lasanha a bolonhesa", "File ao molho madeira", "Batata frita",
            "Suco de laranja", "Refrigerante", "Agua mineral", "Pudim", "Sorvete", "Caipirinha"
    };

    public DataSeeder(MesaRepository mesaRepository, PedidoRepository pedidoRepository) {
        this.mesaRepository = mesaRepository;
        this.pedidoRepository = pedidoRepository;
    }

    @Override
    public void run(String... args) {
        if (!seedEnabled) {
            log.info("[DataSeeder] Seed desabilitado via app.seed.enabled=false");
            return;
        }
        if (mesaRepository.count() > 0 || pedidoRepository.count() > 0) {
            log.info("[DataSeeder] Base ja contem dados ({} mesas, {} pedidos) - seed ignorado",
                    mesaRepository.count(), pedidoRepository.count());
            return;
        }

        Random random = new Random(42);

        List<Mesa> mesas = new ArrayList<>();
        for (int i = 1; i <= quantidadeMesas; i++) {
            Mesa mesa = new Mesa();
            mesa.setNumero(String.valueOf(i));
            mesa.setAssentos(2 + random.nextInt(7));
            mesa.setOcupada(random.nextBoolean());
            mesas.add(mesaRepository.save(mesa));
        }
        log.info("[DataSeeder] {} mesas criadas", mesas.size());

        StatusComandaEnum[] statuses = StatusComandaEnum.values();
        for (int i = 0; i < quantidadePedidos; i++) {
            Mesa mesa = mesas.get(random.nextInt(mesas.size()));

            List<String> itens = new ArrayList<>();
            int qtdItens = 1 + random.nextInt(5);
            for (int j = 0; j < qtdItens; j++) {
                itens.add(ITENS[random.nextInt(ITENS.length)]);
            }

            Pedido pedido = new Pedido();
            pedido.setMesa(mesa);
            pedido.setGarcomResponsavel(GARCONS[random.nextInt(GARCONS.length)]);
            pedido.setItens(itens);
            pedido.setStatus(statuses[random.nextInt(statuses.length)]);
            pedido.setCriadoEm(LocalDateTime.now().minusMinutes(random.nextInt(60 * 24 * 7)));
            pedido.setEnviadoParaCozinha(random.nextBoolean());

            pedidoRepository.save(pedido);
        }
        log.info("[DataSeeder] {} pedidos criados", quantidadePedidos);
    }
}
