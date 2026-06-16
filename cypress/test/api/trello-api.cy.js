/// <reference types="cypress" />

const BASE_URL = 'https://api.trello.com/1/actions'
const VALID_ID = '592f11060f95a3d3d46a987a'
const INVALID_ID = '000000000000000000000000'

describe('[API] - Trello Actions', () => {

    it('[API] - CT001 - GET com ID válido deve retornar status 200 e exibir o name da list', () => {
        cy.request({
            method: 'GET',
            url: `${BASE_URL}/${VALID_ID}`
        }).then((response) => {
            expect(response.status).to.eq(200)
            cy.log('Nome da list: ' + response.body.data.list.name)
        })
    });

    it('[API] - CT002 - GET com ID inválido deve retornar status 404', () => {
        cy.request({
            method: 'GET',
            url: `${BASE_URL}/${INVALID_ID}`,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(404)
        })
    });

});