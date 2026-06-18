# language: pt

Funcionalidade: Busca de Produtos
  Como um usuário da plataforma
  Quero buscar produtos pelo nome
  Para encontrar o que desejo comprar

  Contexto:
    Dado que estou na página inicial "https://www.automationexercise.com"
    E acesso a página de produtos

  Cenário: CT001 - Busca por produto existente deve exibir o produto na listagem
    Quando busco pelo produto "Soft Stretch Jeans"
    Então devo visualizar o produto "Soft Stretch Jeans" na listagem

  Cenário: CT002 - Busca por produto inexistente não deve exibir resultados
    Quando busco pelo produto "Inexistente"
    Então não devo visualizar nenhum produto na listagem