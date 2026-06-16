# language: pt

Funcionalidade: Login
  Como um usuário cadastrado
  Quero me autenticar na plataforma
  Para acessar as áreas restritas

  Contexto:
    Dado que estou na página inicial "https://www.automationexercise.com"
    E acesso a página de login

  Cenário: CT001 - Login com credenciais válidas deve redirecionar para área logada
    Quando preencho o email "teste2024@teste.com.br" e a senha "teste"
    E clico no botão de login
    Então devo visualizar o label de usuário logado

  Cenário: CT002 - Login com credenciais inválidas deve exibir mensagem de erro
    Quando preencho o email "123@teste.com.br" e a senha "123321teste"
    E clico no botão de login
    Então devo visualizar a mensagem "Your email or password is incorrect!"


Funcionalidade: Busca de Produtos
  Como um usuário da plataforma
  Quero buscar produtos pelo nome
  Para encontrar o que desejo comprar

  Contexto:
    Dado que estou na página inicial "https://www.automationexercise.com"
    E acesso a página de produtos

  Cenário: CT003 - Busca por produto existente deve exibir o produto na listagem
    Quando busco pelo produto "Soft Stretch Jeans"
    Então devo visualizar o produto "Soft Stretch Jeans" na listagem

  Cenário: CT004 - Busca por produto inexistente não deve exibir resultados
    Quando busco pelo produto "Inexistente"
    Então não devo visualizar nenhum produto na listagem


Funcionalidade: Carrinho de Compras
  Como um usuário da plataforma
  Quero gerenciar os produtos no carrinho
  Para controlar minha compra

  Contexto:
    Dado que estou na página inicial "https://www.automationexercise.com"

  Cenário: CT005 - Adicionar produto existente ao carrinho deve exibir o produto no carrinho
    Dado que acesso a página de produtos
    Quando busco pelo produto "Soft Stretch Jeans"
    E clico em adicionar ao carrinho
    E acesso o carrinho
    Então devo visualizar o produto "Soft Stretch Jeans" no carrinho

  Cenário: CT006 - Acessar carrinho sem produtos deve exibir mensagem de carrinho vazio
    Quando acesso o carrinho sem adicionar produtos
    Então devo visualizar a mensagem "Cart is empty!"

Funcionalidade: Checkout
  Como um usuário da plataforma
  Quero finalizar minha compra
  Para garantir que os produtos estão corretos antes de pagar

  Contexto:
    Dado que estou na página inicial "https://www.automationexercise.com"

  Cenário: CT007 - Produto adicionado ao carrinho deve ter nome quantidade e preço validados no checkout
    Dado que estou logado com o email "teste2024@teste.com.br" e a senha "teste"
    E acesso a página de produtos
    Quando busco pelo produto "Soft Stretch Jeans"
    E clico em adicionar ao carrinho
    E acesso o carrinho
    E clico em prosseguir para o checkout
    Então devo visualizar o produto "Soft Stretch Jeans" na descrição do carrinho
    E a quantidade do produto deve ser "1"
    E o preço do produto deve estar visível

  Cenário: CT008 - Prosseguir para checkout sem login deve exibir modal de autenticação
    Dado que acesso a página de produtos
    Quando busco pelo produto "Soft Stretch Jeans"
    E clico em adicionar ao carrinho
    E acesso o carrinho
    E clico em prosseguir para o checkout
    Então devo visualizar a mensagem "Register / Login account to proceed on checkout."


Funcionalidade: API Trello Actions
  Como consumidor da API do Trello
  Quero validar o endpoint de Actions
  Para garantir que o serviço retorna os dados e status codes corretos

  Contexto:
    Dado que a API do Trello está disponível em "https://api.trello.com/1/actions"

  Cenário: CT009 - GET com ID válido deve retornar status 200 e exibir o name da list
    Quando envio uma requisição GET com o ID válido "592f11060f95a3d3d46a987a"
    Então o status code da resposta deve ser 200
    E o corpo da resposta deve conter o campo "list"
    E o campo "name" dentro de "list" não deve estar vazio

  Cenário: CT010 - GET com ID inválido deve retornar status 404
    Quando envio uma requisição GET com o ID inválido "000000000000000000000000"
    Então o status code da resposta deve ser 404
