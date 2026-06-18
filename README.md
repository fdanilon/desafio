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
│   └── cenarios.feature        # Cenários escritos em Gherkin (BDD)
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
│       │   └── trello-api.cy.js  # Testes de API
│       └── e2e/
│           └── automation-ex.cy.js  # Testes Web
├── cypress.config.js
├── package.json
└── README.md
```

---

## ✅ Casos de Teste

### Web — [automationexercise.com](https://www.automationexercise.com)

| ID | Cenário | Tipo |
|---|---|---|
| CT001 | Login com credenciais válidas deve redirecionar para área logada | Positivo |
| CT002 | Login com credenciais inválidas deve exibir mensagem de erro | Negativo |
| CT003 | Busca por produto existente deve exibir o produto na listagem | Positivo |
| CT004 | Busca por produto inexistente não deve exibir resultados | Negativo |
| CT005 | Adicionar produto existente ao carrinho deve exibir o produto no carrinho | Positivo |
| CT006 | Acessar carrinho sem produtos deve exibir mensagem de carrinho vazio | Negativo |
| CT007 | Produto adicionado ao carrinho deve ter nome, quantidade e preço validados no checkout | Positivo |
| CT008 | Prosseguir para checkout sem login deve exibir modal de autenticação | Negativo |

### API — [api.trello.com](https://api.trello.com)

| ID | Cenário | Tipo |
|---|---|---|
| CT009 | GET com ID válido deve retornar status 200 e exibir o name da list | Positivo |
| CT010 | GET com ID inválido deve retornar status 404 | Negativo |

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

---

## 🧩 Padrões Utilizados

**Page Objects**
As ações de cada página estão encapsuladas em classes próprias dentro de `cypress/pages/`. Isso centraliza a manutenção dos seletores e permite encadear ações entre páginas de forma organizada.

**Locators centralizados**
Todos os seletores estão mapeados em `cypress/support/locators.js`, evitando repetição e facilitando atualizações quando a interface muda.

**BDD / Gherkin**
Os cenários de teste estão documentados em linguagem natural na pasta `/bdd/cenarios.feature`, servindo como documentação viva do comportamento esperado do sistema.
