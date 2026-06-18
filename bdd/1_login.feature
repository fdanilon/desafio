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