# language: pt

Funcionalidade: API Trello Actions
  Como consumidor da API do Trello
  Quero validar o endpoint de Actions
  Para garantir que o serviço retorna os dados e status codes corretos

  Contexto:
    Dado que a API do Trello está disponível em "https://api.trello.com/1/actions"

  Cenário: CT001 - GET com ID válido deve retornar status 200 e exibir o name da list
    Quando envio uma requisição GET com o ID válido "592f11060f95a3d3d46a987a"
    Então o status code da resposta deve ser 200
    E o corpo da resposta deve conter o campo "list"
    E o campo "name" dentro de "list" não deve estar vazio

  Cenário: CT002 - GET com ID inválido deve retornar status 404
    Quando envio uma requisição GET com o ID inválido "000000000000000000000000"
    Então o status code da resposta deve ser 404