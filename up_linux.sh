#!/bin/bash

echo "Iniciando a infraestrutura (Docker)..."
docker compose up -d

echo "Iniciando as APIs em novas janelas..."

# Abre uma nova janela do terminal para cada API
gnome-terminal -- bash -c "echo 'API Comandas'; cd api-comandas && mvn clean spring-boot:run; exec bash"
gnome-terminal -- bash -c "echo 'API Cozinhas'; cd api-cozinhas && mvn clean spring-boot:run; exec bash"
gnome-terminal -- bash -c "echo 'API Estoque'; cd api-estoque && mvn clean spring-boot:run; exec bash"
gnome-terminal -- bash -c "echo 'API Gateway'; cd api-gateway && mvn clean spring-boot:run; exec bash"

echo "========================================================="
echo "Todas as janelas foram abertas!"
echo "========================================================="