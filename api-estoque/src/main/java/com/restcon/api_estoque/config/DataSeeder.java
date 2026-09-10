package com.restcon.api_estoque.config;

import com.restcon.api_estoque.entity.Ingredients;
import com.restcon.api_estoque.entity.StockChanges;
import com.restcon.api_estoque.entity.StockSupplier;
import com.restcon.api_estoque.repository.IngredientRepository;
import com.restcon.api_estoque.repository.StockChangesRepository;
import com.restcon.api_estoque.repository.StockSupplierRepository;
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
 * Popula o banco "estoque" com fornecedores, ingredientes e movimentacoes
 * ficticias, para permitir testes de carga (JMeter) realistas.
 * So executa se a base estiver vazia. Desligavel via app.seed.enabled=false.
 */
@Component
public class DataSeeder implements CommandLineRunner {

    private static final Logger log = LoggerFactory.getLogger(DataSeeder.class);

    private final StockSupplierRepository stockSupplierRepository;
    private final IngredientRepository ingredientRepository;
    private final StockChangesRepository stockChangesRepository;

    @Value("${app.seed.enabled:true}")
    private boolean seedEnabled;

    @Value("${app.seed.suppliers:10}")
    private int quantidadeFornecedores;

    @Value("${app.seed.ingredients:60}")
    private int quantidadeIngredientes;

    @Value("${app.seed.stock-changes:150}")
    private int quantidadeMovimentacoes;

    private static final String[] FORNECEDORES = {
            "Distribuidora Sabor e Cia", "Agropecuaria Boa Vista", "Hortifruti Central",
            "Frigorifico Nordeste", "Laticinios Serra Verde", "Peixaria do Porto",
            "Padaria Trigo Dourado", "Bebidas Litoral", "Mercado do Produtor", "Importadora Sul"
    };

    private static final String[] INGREDIENTES = {
            "Arroz", "Feijao", "Carne bovina", "Frango", "Peixe", "Camarao", "Tomate",
            "Cebola", "Alho", "Batata", "Queijo", "Leite", "Ovos", "Farinha de trigo",
            "Acucar", "Sal", "Azeite", "Limao", "Alface", "Cenoura"
    };

    private static final String[] UNIDADES = {"kg", "g", "L", "ml", "un"};

    public DataSeeder(StockSupplierRepository stockSupplierRepository,
                       IngredientRepository ingredientRepository,
                       StockChangesRepository stockChangesRepository) {
        this.stockSupplierRepository = stockSupplierRepository;
        this.ingredientRepository = ingredientRepository;
        this.stockChangesRepository = stockChangesRepository;
    }

    @Override
    public void run(String... args) {
        if (!seedEnabled) {
            log.info("[DataSeeder] Seed desabilitado via app.seed.enabled=false");
            return;
        }
        if (stockSupplierRepository.count() > 0) {
            log.info("[DataSeeder] Base ja contem dados ({} fornecedores) - seed ignorado",
                    stockSupplierRepository.count());
            return;
        }

        Random random = new Random(42);

        List<StockSupplier> suppliers = new ArrayList<>();
        for (int i = 0; i < quantidadeFornecedores; i++) {
            String nome = FORNECEDORES[i % FORNECEDORES.length];
            // StockSupplier.ingredients agora e mapeado com mappedBy = "supplier" (corrigido),
            // entao continuamos associando o fornecedor pelo lado dono do relacionamento
            // real (Ingredients.setSupplier), que e o padrao correto em JPA/Hibernate.
            StockSupplier supplier = new StockSupplier(
                    nome + " " + (i + 1),
                    "contato" + (i + 1) + "@fornecedor" + (i + 1) + ".com.br",
                    "Rua Exemplo, " + (100 + i) + " - Recife/PE",
                    new ArrayList<>()
            );
            suppliers.add(stockSupplierRepository.save(supplier));
        }
        log.info("[DataSeeder] {} fornecedores criados", suppliers.size());

        List<Ingredients> ingredients = new ArrayList<>();
        for (int i = 0; i < quantidadeIngredientes; i++) {
            String nome = INGREDIENTES[i % INGREDIENTES.length] + " #" + i;
            String unidade = UNIDADES[random.nextInt(UNIDADES.length)];
            Ingredients ingredient = new Ingredients(nome, unidade);
            ingredient.setQuantity(10f + random.nextFloat() * 490f);
            ingredient.setSupplier(suppliers.get(random.nextInt(suppliers.size())));
            ingredients.add(ingredientRepository.save(ingredient));
        }
        log.info("[DataSeeder] {} ingredientes criados", ingredients.size());

        StockChanges.StockChangesTypes[] tipos = StockChanges.StockChangesTypes.values();
        for (int i = 0; i < quantidadeMovimentacoes; i++) {
            Map<String, Float> itens = new HashMap<>();
            int qtdItens = 1 + random.nextInt(4);
            for (int j = 0; j < qtdItens; j++) {
                Ingredients ing = ingredients.get(random.nextInt(ingredients.size()));
                itens.put(String.valueOf(ing.getIngredientsID()), 1f + random.nextFloat() * 20f);
            }
            StockChanges.StockChangesTypes tipo = tipos[random.nextInt(tipos.length)];

            // StockChanges.supplier agora e @ManyToOne (corrigido), entao podemos associar
            // um fornecedor de verdade a cada movimentacao sem risco de violar constraint
            // de unicidade.
            StockChanges change = new StockChanges(
                    50 + random.nextInt(950),
                    tipo,
                    itens,
                    suppliers.get(random.nextInt(suppliers.size()))
            );
            stockChangesRepository.save(change);
        }
        log.info("[DataSeeder] {} movimentacoes de estoque criadas", quantidadeMovimentacoes);
    }
}
