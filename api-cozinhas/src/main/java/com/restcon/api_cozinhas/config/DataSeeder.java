package com.restcon.api_cozinhas.config;

import com.restcon.api_cozinhas.entity.Kitchen;
import com.restcon.api_cozinhas.entity.Order;
import com.restcon.api_cozinhas.entity.Plate;
import com.restcon.api_cozinhas.repository.KitchenRepository;
import com.restcon.api_cozinhas.repository.OrderRepository;
import com.restcon.api_cozinhas.repository.PlateRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;

/**
 * Popula o banco "cozinhas" com cozinhas, pratos e pedidos ficticios,
 * necessarios para testes de carga (JMeter) que retornem payloads reais.
 * So executa se a base estiver vazia. Desligavel via app.seed.enabled=false.
 */
@Component
public class DataSeeder implements CommandLineRunner {

    private static final Logger log = LoggerFactory.getLogger(DataSeeder.class);

    private final KitchenRepository kitchenRepository;
    private final PlateRepository plateRepository;
    private final OrderRepository orderRepository;

    @Value("${app.seed.enabled:true}")
    private boolean seedEnabled;

    @Value("${app.seed.kitchens:5}")
    private int quantidadeCozinhas;

    @Value("${app.seed.plates:50}")
    private int quantidadePratos;

    @Value("${app.seed.orders:300}")
    private int quantidadePedidos;

    private static final String[] NOMES_COZINHA = {
            "Cozinha Principal", "Cozinha de Grelhados", "Cozinha Vegana", "Confeitaria", "Bar e Bebidas"
    };

    private static final String[] NOMES_PRATO = {
            "Feijoada", "Picanha na chapa", "Moqueca de peixe", "Risoto de camarao",
            "Salada Caesar", "Lasanha a bolonhesa", "File ao molho madeira", "Batata frita",
            "Torta de limao", "Brownie", "Suco natural", "Caipirinha"
    };

    private static final String[] GARCONS = {
            "Ana Souza", "Bruno Lima", "Carla Dias", "Diego Alves", "Elaine Rocha"
    };

    public DataSeeder(KitchenRepository kitchenRepository, PlateRepository plateRepository, OrderRepository orderRepository) {
        this.kitchenRepository = kitchenRepository;
        this.plateRepository = plateRepository;
        this.orderRepository = orderRepository;
    }

    @Override
    public void run(String... args) {
        if (!seedEnabled) {
            log.info("[DataSeeder] Seed desabilitado via app.seed.enabled=false");
            return;
        }
        if (kitchenRepository.count() > 0) {
            log.info("[DataSeeder] Base ja contem dados ({} cozinhas) - seed ignorado", kitchenRepository.count());
            return;
        }

        Random random = new Random(42);

        List<Kitchen> kitchens = new ArrayList<>();
        for (int i = 0; i < quantidadeCozinhas; i++) {
            String nome = NOMES_COZINHA[i % NOMES_COZINHA.length];
            Kitchen kitchen = new Kitchen(nome + " " + (i + 1), "Cozinha responsavel por " + nome.toLowerCase());
            kitchens.add(kitchenRepository.save(kitchen));
        }
        log.info("[DataSeeder] {} cozinhas criadas", kitchens.size());

        List<Plate> plates = new ArrayList<>();
        for (int i = 0; i < quantidadePratos; i++) {
            Kitchen kitchen = kitchens.get(random.nextInt(kitchens.size()));
            Map<Long, Double> ingredientes = new HashMap<>();
            int qtdIngredientes = 2 + random.nextInt(4);
            for (int j = 0; j < qtdIngredientes; j++) {
                ingredientes.put((long) (1 + random.nextInt(60)), 0.1 + random.nextDouble() * 2);
            }
            // Sem sufixo numerico de proposito: os nomes precisam bater com os itens
            // (texto livre) gerados pelo DataSeeder da api-comandas, que agora sao
            // traduzidos para plate_ID em PedidoService.enviarParaCozinha().
            String nomePrato = NOMES_PRATO[random.nextInt(NOMES_PRATO.length)];
            Plate plate = new Plate(
                    nomePrato,
                    "Modo de preparo do " + nomePrato,
                    1000 + random.nextInt(9000),
                    "Descricao do prato " + nomePrato,
                    kitchen,
                    ingredientes
            );
            plates.add(plateRepository.save(plate));
        }
        log.info("[DataSeeder] {} pratos criados", plates.size());

        for (int i = 0; i < quantidadePedidos; i++) {
            int qtdPratos = 1 + random.nextInt(4);
            List<Plate> pratosDoPedido = new ArrayList<>();
            for (int j = 0; j < qtdPratos; j++) {
                pratosDoPedido.add(plates.get(random.nextInt(plates.size())));
            }
            Order order = new Order(
                    1 + random.nextInt(30),
                    GARCONS[random.nextInt(GARCONS.length)],
                    pratosDoPedido
            );
            orderRepository.save(order);
        }
        log.info("[DataSeeder] {} pedidos (orders) criados", quantidadePedidos);
    }
}
