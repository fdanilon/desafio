const locators = {
    label_logado: ':nth-child(10) > a',
    label_login_incorreto: '.login-form > form > p',
    label_carrinho_vazio: '#empty_cart',
    label_descricao_carrinho: '.cart_description',
    label_quantidade_carrinho: '.cart_quantity',
    label_preco_carrinho: '.cart_total_price',
    modal_carrinho: '.modal-content',
    titulo_produto: '.productinfo > p',
    botao_adicionar_carrinho: '.productinfo > .btn',
    botao_seguir_compra: "Proceed To Checkout",
    nome_produto_carrinho: "a[href^='/product_details/']",
    menu: {
        login: "a[href='/login']",
        produto: "a[href='/products']",
        carrinho: "a[href='/view_cart']"
    }
}

export default locators