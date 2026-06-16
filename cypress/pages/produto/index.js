class Produto {
    buscarProduto(produto){
        cy.get('input[id="search_product"]').type(produto)
        cy.get('button[id="submit_search"]').click()
    }
}

export default new Produto()