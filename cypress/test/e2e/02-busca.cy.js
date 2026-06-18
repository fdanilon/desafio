/// <reference types="cypress" />
import locator from '../../support/locators.js'
import produto from '../../pages/produto/index.js'

describe('[BUSCA] - Automation Exercise', () => {

    beforeEach(() => {
        cy.visit("https://www.automationexercise.com/");
    });

    it('[BUSCA] - CT001 - Busca por produto existente deve exibir o produto na listagem', () => {
        const nome_produto = "Soft Stretch Jeans"

        cy.get(locator.menu.produto).click()
        produto.buscarProduto(nome_produto)

        cy.get(locator.titulo_produto).should('have.text', nome_produto)

    });

    it('[BUSCA] - CT002 - Busca por produto inexistente não deve exibir resultados', () => {

        cy.get(locator.menu.produto).click()

        produto.buscarProduto("Inexistente")

        cy.get(locator.titulo_produto).should('not.exist')
   });
});