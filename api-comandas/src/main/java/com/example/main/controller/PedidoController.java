package com.example.main.controller;

import com.example.main.model.Pedido;
import com.example.main.model.StatusComandaEnum;
import com.example.main.model.dto.PedidoDTO;
import com.example.main.service.PedidoService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/comandas")
public class PedidoController {

    private final PedidoService pedidoService;

    public PedidoController(PedidoService pedidoService) {
        this.pedidoService = pedidoService;
    }

    @PostMapping
    public ResponseEntity<Pedido> criar(@RequestBody PedidoDTO dto) {
        // OBS: antes, este metodo montava um Pedido inteiro (e buscava a Mesa)
        // aqui e depois descartava tudo isso ao chamar pedidoService.criarPedido(dto),
        // que refaz a mesma busca de Mesa internamente. Era codigo morto que gerava
        // uma consulta a mais por requisicao sem nenhum efeito. Removido.
        Pedido novoPedido = pedidoService.criarPedido(dto);
        return ResponseEntity.ok(novoPedido);
    }

    @GetMapping
    public ResponseEntity<List<Pedido>> obterTodosPedidos() {
        List<Pedido> pedidos = pedidoService.obterTodosPedidos();
        return ResponseEntity.ok(pedidos);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Pedido> obterPedidoPorId(@PathVariable Long id) {
        Pedido pedido = pedidoService.obterPedidoPorId(id);
        return ResponseEntity.ok(pedido);
    }

    @PutMapping("/{id}/status")
    public ResponseEntity<Pedido> atualizarStatus(@PathVariable Long id, @RequestBody StatusComandaEnum status) {
        Pedido pedido = pedidoService.atualizarStatus(id, status);
        return ResponseEntity.ok(pedido);
    }

    @PostMapping("/enviar")
    public ResponseEntity<String> enviarParaCozinha(@RequestBody PedidoDTO pedidoDTO, @RequestParam String numeroMesa) {
        String response = pedidoService.enviarParaCozinha(pedidoDTO, numeroMesa);

        if (response.startsWith("Erro")) {
            return ResponseEntity.status(500).body(response);
        } else {
            return ResponseEntity.ok(response);
        }
    }
}
