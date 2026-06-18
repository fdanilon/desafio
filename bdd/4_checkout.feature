# language: pt

Funcionalidade: Checkout
  Como um usuário da plataforma
  Quero finalizar minha compra
  Para garantir que os produtos estão corretos antes de pagar

  Contexto:
    Dado que estou na página inicial "https://www.automationexercise.com"

  Cenário: CT001 - Produto adicionado ao carrinho deve ter nome quantidade e preço validados no checkout
    Dado que estou logado com o email "teste2024@teste.com.br" e a senha "teste"
    E acesso a página de produtos
    Quando busco pelo produto "Soft Stretch Jeans"
    E clico em adicionar ao carrinho
    E acesso o carrinho
    E clico em prosseguir para o checkout
    Então devo visualizar o produto "Soft Stretch Jeans" na descrição do carrinho
    E a quantidade do produto deve ser "1"
    E o preço do produto deve estar visível

  Cenário: CT002 - Prosseguir para checkout sem login deve exibir modal de autenticação
    Dado que acesso a página de produtos
    Quando busco pelo produto "Soft Stretch Jeans"
    E clico em adicionar ao carrinho
    E acesso o carrinho
    E clico em prosseguir para o checkout
    Então devo visualizar a mensagem "Register / Login account to proceed on checkout."