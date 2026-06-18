# Desafio de Automação de Testes

Framework de automação de testes web e API desenvolvido com Cypress e JavaScript, com cenários escritos seguindo o padrão BDD (Gherkin).

---

## 🛠️ Tecnologias Utilizadas

- **Cypress** v15.17.0
- **JavaScript**
- **BDD / Gherkin** (cenários na pasta `/bdd`)
- **Page Objects** (padrão de organização dos testes)

---

## 📁 Estrutura do Projeto

```
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
```

---

## ✅ Casos de Teste

### Web — [automationexercise.com](https://www.automationexercise.com)

| Feature | ID | Cenário | Tipo |
|---|---|---|---|
| Login | CT001 | Login com credenciais válidas deve redirecionar para área logada | Positivo |
| Login | CT002 | Login com credenciais inválidas deve exibir mensagem de erro | Negativo |
| Busca | CT001 | Busca por produto existente deve exibir o produto na listagem | Positivo |
| Busca | CT002 | Busca por produto inexistente não deve exibir resultados | Negativo |
| Carrinho | CT001 | Adicionar produto existente ao carrinho deve exibir o produto no carrinho | Positivo |
| Carrinho | CT002 | Acessar carrinho sem produtos deve exibir mensagem de carrinho vazio | Negativo |
| Checkout | CT001 | Produto adicionado ao carrinho deve ter nome e preço validados no checkout | Positivo |
| Checkout | CT002 | Prosseguir para checkout sem login deve exibir modal de autenticação | Negativo |

### API — [api.trello.com](https://api.trello.com)

| Feature | ID | Cenário | Tipo |
|---|---|---|---|
| API | CT001 | GET com ID válido deve retornar status 200 e exibir o name da list | Positivo |
| API | CT002 | GET com ID inválido deve retornar status 404 | Negativo |

---

## ⚙️ Pré-requisitos

- [Node.js](https://nodejs.org/) v18 ou superior
- npm v8 ou superior

---

## 🚀 Instalação

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/seu-usuario/desafio.git
cd desafio
npm install
```

---

## ▶️ Execução dos Testes

### Interface gráfica do Cypress
```bash
npm run cy:open
```

### Todos os testes em modo headless
```bash
npm run cy:run
```

### Apenas testes Web
```bash
npm run cy:run:web
```

### Apenas testes de API
```bash
npm run cy:run:api
```

### Rodar uma feature específica (debug pontual)
```bash
npx cypress run --spec "cypress/test/e2e/01-login.cy.js"
```

---

## 🧩 Padrões Utilizados

**Page Objects**
As ações de cada página estão encapsuladas em classes próprias dentro de `cypress/pages/`. Isso centraliza a manutenção dos seletores e permite encadear ações entre páginas de forma organizada.

**Locators centralizados**
Todos os seletores estão mapeados em `cypress/support/locators.js`, evitando repetição e facilitando atualizações quando a interface muda.

**BDD / Gherkin**
Os cenários de teste estão documentados em linguagem natural na pasta `/bdd`, com um arquivo `.feature` por funcionalidade (Login, Busca, Carrinho, Checkout e API). Cada feature mantém sua própria numeração de cenários (CT001, CT002...), servindo como documentação viva do comportamento esperado do sistema.

**Separação por Feature**
Tanto os arquivos `.feature` quanto os specs `.cy.js` estão organizados individualmente por funcionalidade, seguindo a recomendação oficial do Cypress de estruturar os testes refletindo as áreas da aplicação, facilitando manutenção e execução isolada de cada conjunto de testes.
