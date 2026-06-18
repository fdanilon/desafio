Desafio de Automação de Testes

Framework de automação de testes web e API desenvolvido com Cypress e JavaScript, com cenários escritos seguindo o padrão BDD (Gherkin).


🛠️ Tecnologias Utilizadas


Cypress v15.17.0
JavaScript
BDD / Gherkin (cenários na pasta /bdd)
Page Objects (padrão de organização dos testes)



📁 Estrutura do Projeto

DESAFIO/
├── bdd/
│   ├── login.feature           # Cenários de Login em Gherkin
│   ├── busca.feature           # Cenários de Busca em Gherkin
│   ├── carrinho.feature        # Cenários de Carrinho em Gherkin
│   ├── checkout.feature        # Cenários de Checkout em Gherkin
│   └── api.feature             # Cenários de API em Gherkin
├── cypress/
│   ├── fixtures/
│   ├── pages/
│   │   ├── login/
│   │   │   └── index.js        # Page Object da página de Login
│   │   └── produto/
│   │       └── index.js        # Page Object da página de Produtos
│   ├── support/
│   │   ├── commands.js
│   │   ├── e2e.js
│   │   └── locators.js         # Mapeamento centralizado de seletores
│   └── test/
│       ├── api/
│       │   └── 01-get.cy.js          # Testes de API
│       └── e2e/
│           ├── 01-login.cy.js        # Testes de Login
│           ├── 02-busca.cy.js        # Testes de Busca
│           ├── 03-carrinho.cy.js     # Testes de Carrinho
│           └── 04-checkout.cy.js     # Testes de Checkout
├── cypress.config.js
├── package.json
└── README.md


✅ Casos de Teste

Web — automationexercise.com

FeatureIDCenárioTipoLoginCT001Login com credenciais válidas deve redirecionar para área logadaPositivoLoginCT002Login com credenciais inválidas deve exibir mensagem de erroNegativoBuscaCT001Busca por produto existente deve exibir o produto na listagemPositivoBuscaCT002Busca por produto inexistente não deve exibir resultadosNegativoCarrinhoCT001Adicionar produto existente ao carrinho deve exibir o produto no carrinhoPositivoCarrinhoCT002Acessar carrinho sem produtos deve exibir mensagem de carrinho vazioNegativoCheckoutCT001Produto adicionado ao carrinho deve ter nome e preço validados no checkoutPositivoCheckoutCT002Prosseguir para checkout sem login deve exibir modal de autenticaçãoNegativo

API — api.trello.com

FeatureIDCenárioTipoAPICT001GET com ID válido deve retornar status 200 e exibir o name da listPositivoAPICT002GET com ID inválido deve retornar status 404Negativo


⚙️ Pré-requisitos


Node.js v18 ou superior
npm v8 ou superior



🚀 Instalação

Clone o repositório e instale as dependências:

bashgit clone https://github.com/seu-usuario/desafio.git
cd desafio
npm install


▶️ Execução dos Testes

Interface gráfica do Cypress

bashnpm run cy:open

Todos os testes em modo headless

bashnpm run cy:run

Apenas testes Web

bashnpm run cy:run:web

Apenas testes de API

bashnpm run cy:run:api

Rodar uma feature específica (debug pontual)

bashnpx cypress run --spec "cypress/test/e2e/01-login.cy.js"


🧩 Padrões Utilizados

Page Objects
As ações de cada página estão encapsuladas em classes próprias dentro de cypress/pages/. Isso centraliza a manutenção dos seletores e permite encadear ações entre páginas de forma organizada.

Locators centralizados
Todos os seletores estão mapeados em cypress/support/locators.js, evitando repetição e facilitando atualizações quando a interface muda.

BDD / Gherkin
Os cenários de teste estão documentados em linguagem natural na pasta /bdd, com um arquivo .feature por funcionalidade (Login, Busca, Carrinho, Checkout e API). Cada feature mantém sua própria numeração de cenários (CT001, CT002...), servindo como documentação viva do comportamento esperado do sistema.

Separação por Feature
Tanto os arquivos .feature quanto os specs .cy.js estão organizados individualmente por funcionalidade, seguindo a recomendação oficial do Cypress de estruturar os testes refletindo as áreas da aplicação, facilitando manutenção e execução isolada de cada conjunto de testes.
