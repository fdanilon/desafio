/// <reference types="cypress" />
import locator from '../../support/locators.js'
import produto from '../../pages/produto/index.js'

describe('[CARRINHO] - Automation Exercise', () => {

    beforeEach(() => {
        cy.visit("https://www.automationexercise.com/");
    });

   it('[CARRINHO] - CT001 - Adicionar produto existente ao carrinho deve exibir o produto no carrinho', () => {
        const nome_produto = "Soft Stretch Jeans"

        cy.get(locator.menu.produto).click()
        produto.buscarProduto(nome_produto)
        cy.get(locator.botao_adicionar_carrinho).click()
        cy.get(locator.menu.carrinho).eq(1).click()

        cy.get(locator.nome_produto_carrinho).should('contain.text', nome_produto)
   });

   it('[CARRINHO] - CT002 - Acessar carrinho sem produtos deve exibir mensagem de carrinho vazio', () => {

        cy.get(locator.menu.carrinho).eq(0).click()

        cy.get(locator.label_carrinho_vazio).should('contain.text','Cart is empty!')

   });
});