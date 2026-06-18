/// <reference types="cypress" />
import locator from '../../support/locators.js'
import login from '../../pages/login/index.js'

describe('[LOGIN] - Automation Exercise', () => {

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
});