package com.example.main.model.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

/**
 * Vista minima de um prato retornado por GET /api/prato na api-cozinhas.
 * Usada apenas para traduzir o nome do item (texto livre, como o cardapio
 * de comandas guarda hoje) para o plate_ID esperado pelo endpoint real de
 * criacao de pedido. Ignora os demais campos do Plate (kitchen, ingredients,
 * orders, etc.) que nao interessam aqui.
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public record PlateResumoDTO(long plate_ID, String name) {
}
