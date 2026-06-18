/// <reference types="cypress" />
import locator from '../../support/locators.js'
import login from '../../pages/login/index.js'
import produto from '../../pages/produto/index.js'

describe('[CHECKOUT] - Automation Exercise', () => {

    beforeEach(() => {
        cy.visit("https://www.automationexercise.com/");
    });

    it('[CHECKOUT] - CT001 - Produto adicionado ao carrinho deve ter nome e preço validados no checkout', () => {
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


    it('[CHECKOUT] - CT002 - Prosseguir para checkout sem login deve exibir modal de autenticação', () => {
        const nome_produto = "Soft Stretch Jeans"

        cy.get(locator.menu.produto).click();
        produto.buscarProduto(nome_produto)
        cy.get(locator.botao_adicionar_carrinho).click()
        cy.get(locator.menu.carrinho).eq(1).click()
        cy.contains(locator.botao_seguir_compra).click()

        cy.get(locator.modal_carrinho).should('contain.text','Register / Login account to proceed on checkout.')
   });
});