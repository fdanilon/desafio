/// <reference types="cypress" />
import locator from '../../support/locators.js'
import login from '../../pages/login/index.js'
import produto from '../../pages/produto/index.js'
describe('[WEB] - Automation Exercise', () => {

    beforeEach(() => {
        cy.visit("https://www.automationexercise.com/");
    });

    it('[LOGIN] - CT001 - Login com credenciais válidas deve redirecionar para área logada', () => {
        
        cy.get(locator.menu.login).click();

        login.preencherLogin('teste2024@teste.com.br','teste')

        cy.get(locator.label_logado).should('be.visible')
    
    });

    it('[LOGIN] - CT002 - Login com credenciais inválidas deve exibir mensagem de erro', () => {
        
        cy.get(locator.menu.login).click();

        login.preencherLogin('123@teste.com.br','123321teste')

        cy.get(locator.label_login_incorreto).should('have.text','Your email or password is incorrect!')
    
    });

    it('[BUSCA] - CT003 - Busca por produto existente deve exibir o produto na listagem', () => {
        const nome_produto = "Soft Stretch Jeans"

        cy.get(locator.menu.produto).click()
        produto.buscarProduto(nome_produto)

        cy.get(locator.titulo_produto).should('have.text', nome_produto)

    });

    it('[BUSCA] - CT004 - Busca por produto inexistente não deve exibir resultados', () => {
        
        cy.get(locator.menu.produto).click()

        produto.buscarProduto("Inexistente")

        cy.get(locator.titulo_produto).should('not.exist')
   });

   it('[CARRINHO] - CT005 - Adicionar produto existente ao carrinho deve exibir o produto no carrinho', () => {
        const nome_produto = "Soft Stretch Jeans"

        cy.get(locator.menu.produto).click()
        produto.buscarProduto(nome_produto)
        cy.get(locator.botao_adicionar_carrinho).click()
        cy.get(locator.menu.carrinho).eq(1).click()

        cy.get(locator.nome_produto_carrinho).should('contain.text', nome_produto)
   });

   it('[CARRINHO] - CT006 - Acessar carrinho sem produtos deve exibir mensagem de carrinho vazio', () => {
        
        cy.get(locator.menu.carrinho).eq(0).click()

        cy.get(locator.label_carrinho_vazio).should('contain.text','Cart is empty!')
                
   });

    it('[CHECKOUT] - CT007 - Produto adicionado ao carrinho deve ter nome e preço validados no checkout', () => {
        const nome_produto = "Soft Stretch Jeans"

        cy.get(locator.menu.login).click();
        login.preencherLogin('teste2024@teste.com.br','teste')
        cy.get(locator.menu.produto).click()
        produto.buscarProduto(nome_produto)
        cy.get(locator.botao_adicionar_carrinho).click()
        cy.get(locator.menu.carrinho).eq(1).click()
        cy.contains(locator.botao_seguir_compra).click()

        cy.get(locator.label_descricao_carrinho).should("contain", nome_produto)
        cy.get(locator.label_preco_carrinho).should("exist")
   });

   
    it('[CHECKOUT] - CT008 - Prosseguir para checkout sem login deve exibir modal de autenticação', () => {
        const nome_produto = "Soft Stretch Jeans"
        
        cy.get(locator.menu.produto).click();
        produto.buscarProduto(nome_produto)
        cy.get(locator.botao_adicionar_carrinho).click()
        cy.get(locator.menu.carrinho).eq(1).click()
        cy.contains(locator.botao_seguir_compra).click()

        cy.get(locator.modal_carrinho).should('contain.text','Register / Login account to proceed on checkout.')
   });
});