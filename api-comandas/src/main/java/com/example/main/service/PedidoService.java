package com.example.main.service;

import com.example.main.model.Pedido;
import com.example.main.model.StatusComandaEnum;
import com.example.main.model.Mesa;
import com.example.main.model.dto.CriarPedidoCozinhaDTO;
import com.example.main.model.dto.PedidoDTO;
import com.example.main.model.dto.PlateResumoDTO;
import com.example.main.repository.PedidoRepository;
import com.example.main.repository.MesaRepository;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.client.RestTemplate;

import java.time.Duration;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class PedidoService {

    private final PedidoRepository pedidoRepository;
    private final MesaRepository mesaRepository;
    private final RestTemplate restTemplate;

    // Base do gateway para o dominio de cozinha (rota real: predicate Path=/cozinha/**
    // com StripPrefix=1, ver api-gateway/application.yml).
    @Value("${cozinha.api.url}")
    private String cozinhaApiUrl;

    public PedidoService(PedidoRepository pedidoRepository, MesaRepository mesaRepository,
                          RestTemplateBuilder restTemplateBuilder) {
        this.pedidoRepository = pedidoRepository;
        this.mesaRepository = mesaRepository;
        // Antes: "new RestTemplate()" sem timeout, o que deixa uma requisicao presa
        // indefinidamente (e uma thread do Tomcat bloqueada) se o outro lado nao responder.
        this.restTemplate = restTemplateBuilder
                .connectTimeout(Duration.ofSeconds(3))
                .readTimeout(Duration.ofSeconds(5))
                .build();
    }

    @Transactional
    public Pedido criarPedido(PedidoDTO pedidoDTO) {
        Optional<Mesa> mesaOpt = mesaRepository.findById(pedidoDTO.getMesaId());
        if (mesaOpt.isEmpty()) {
            throw new RuntimeException("Mesa não encontrada");
        }

        Mesa mesa = mesaOpt.get();

        Pedido pedido = new Pedido();
        pedido.setMesa(mesa);
        pedido.setGarcomResponsavel(pedidoDTO.getGarcomResponsavel());
        pedido.setItens(pedidoDTO.getItens());
        pedido.setStatus(StatusComandaEnum.CRIADO);
        pedido.setCriadoEm(LocalDateTime.now());
        pedido.setEnviadoParaCozinha(false);

        return pedidoRepository.save(pedido);
    }

    @Transactional
    public Pedido atualizarStatus(Long pedidoId, StatusComandaEnum status) {
        Pedido pedido = pedidoRepository.findById(pedidoId)
                .orElseThrow(() -> new RuntimeException("Pedido não encontrado"));

        pedido.setStatus(status);
        return pedidoRepository.save(pedido);
    }

    public List<Pedido> obterTodosPedidos() {
        return pedidoRepository.findAll();
    }

    public Pedido obterPedidoPorId(Long pedidoId) {
        return pedidoRepository.findById(pedidoId)
                .orElseThrow(() -> new RuntimeException("Pedido não encontrado"));
    }

    /**
     * Envia um pedido para a api-cozinhas usando o endpoint real que já existe
     * lá (POST /api/pedido, ver OrderController). Esse endpoint espera IDs de
     * prato (long[]), enquanto o cardápio de comandas guarda os itens como
     * texto livre (List<String>) — por isso primeiro buscamos a lista de
     * pratos cadastrados na cozinha (GET /api/prato) e traduzimos nome -> ID
     * antes de montar a requisição.
     *
     * Antes desta correção: a URL era fixa em "http://localhost:8081/..."
     * (não funciona dentro do Docker Compose), o payload enviado (nomes de
     * prato) não correspondia a nenhum endpoint real do outro lado, e o
     * método sempre retornava a URL como string de sucesso — mesmo em caso
     * de erro — o que fazia o PedidoController nunca reportar falha.
     */
    public String enviarParaCozinha(PedidoDTO pedidoDTO, String numeroMesa) {
        final int numero;
        try {
            numero = Integer.parseInt(numeroMesa);
        } catch (NumberFormatException e) {
            return "Erro: numeroMesa inválido: " + numeroMesa;
        }

        List<PlateResumoDTO> pratosDisponiveis;
        try {
            ResponseEntity<PlateResumoDTO[]> pratosResponse = restTemplate.getForEntity(
                    cozinhaApiUrl + "/api/prato", PlateResumoDTO[].class);
            pratosDisponiveis = pratosResponse.getBody() == null
                    ? List.of()
                    : Arrays.asList(pratosResponse.getBody());
        } catch (Exception e) {
            return "Erro ao consultar cardápio da cozinha: " + e.getMessage();
        }

        Map<String, Long> idPorNome = pratosDisponiveis.stream()
                .collect(Collectors.toMap(
                        p -> p.name().trim().toLowerCase(),
                        PlateResumoDTO::plate_ID,
                        (idExistente, idDuplicado) -> idExistente));

        List<String> itensNaoEncontrados = new ArrayList<>();
        List<Long> idsEncontrados = new ArrayList<>();
        for (String item : pedidoDTO.getItens()) {
            Long id = idPorNome.get(item.trim().toLowerCase());
            if (id == null) {
                itensNaoEncontrados.add(item);
            } else {
                idsEncontrados.add(id);
            }
        }

        if (!itensNaoEncontrados.isEmpty()) {
            return "Erro: prato(s) não cadastrado(s) na cozinha: " + String.join(", ", itensNaoEncontrados);
        }

        long[] plateIds = idsEncontrados.stream().mapToLong(Long::longValue).toArray();

        CriarPedidoCozinhaDTO dto = new CriarPedidoCozinhaDTO(
                numero,
                pedidoDTO.getGarcomResponsavel(),
                plateIds
        );

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity<CriarPedidoCozinhaDTO> request = new HttpEntity<>(dto, headers);

        try {
            ResponseEntity<String> response = restTemplate.exchange(
                    cozinhaApiUrl + "/api/pedido",
                    HttpMethod.POST,
                    request,
                    String.class
            );

            return "OK: pedido enviado (" + response.getStatusCode() + ")";

        } catch (Exception e) {
            return "Erro ao enviar pedido para cozinha: " + e.getMessage();
        }
    }
}
