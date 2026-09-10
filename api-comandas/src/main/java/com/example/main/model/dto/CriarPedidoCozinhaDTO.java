package com.example.main.model.dto;

/**
 * Payload aceito pelo endpoint real da api-cozinhas: POST /api/pedido
 * (ver OrderController + CreateOrderDTO no servico api-cozinhas).
 * O endpoint la trabalha com IDs de prato, nao com nomes em texto livre.
 */
public record CriarPedidoCozinhaDTO(Integer table_number, String waiter, long[] plates) {
}
