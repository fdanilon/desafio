# language: pt

Funcionalidade: Carrinho de Compras
  Como um usuário da plataforma
  Quero gerenciar os produtos no carrinho
  Para controlar minha compra

  Contexto:
    Dado que estou na página inicial "https://www.automationexercise.com"

  Cenário: CT001 - Adicionar produto existente ao carrinho deve exibir o produto no carrinho
    Dado que acesso a página de produtos
    Quando busco pelo produto "Soft Stretch Jeans"
    E clico em adicionar ao carrinho
    E acesso o carrinho
    Então devo visualizar o produto "Soft Stretch Jeans" no carrinho

  Cenário: CT002 - Acessar carrinho sem produtos deve exibir mensagem de carrinho vazio
    Quando acesso o carrinho sem adicionar produtos
    Então devo visualizar a mensagem "Cart is empty!"