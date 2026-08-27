@echo off
echo Iniciando a infraestrutura (Docker)...
docker-compose up -d

echo Iniciando as APIs...

cd api-comandas
start "API Comandas" cmd /k "mvn clean spring-boot:run"
cd ..

cd api-cozinhas
start "API Cozinhas" cmd /k "mvn clean spring-boot:run"
cd ..

cd api-estoque
start "API Estoque" cmd /k "mvn clean spring-boot:run"
cd ..

cd api-gateway
start "API Gateway" cmd /k "mvn clean spring-boot:run"
cd ..

echo Todas as APIs foram iniciadas!
pause