class Login {
    preencherLogin(login,senha){
        cy.get('input[data-qa="login-email"]').type(login)
        cy.get('input[data-qa="login-password"]').type(senha)
        cy.get('button[data-qa="login-button"]').click()
    }
}

export default new Login()