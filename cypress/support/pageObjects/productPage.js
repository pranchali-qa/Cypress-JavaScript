class productPage{

    pageValidation()
    {
        cy.contains('Shop Name').should('be.visible');
    }

    verifyCardLimit()
    {
        cy.get('app-card').should('have.length', 4);
    }

    selectProduct(productName)
    {
        cy.get('app-card').filter(`:contains("${productName}")`).then($el =>
            {
                cy.wrap($el).should('have.length', 1);
                cy.wrap($el).contains('button','Add').click();
            })
    }

    gotToCard(){
        cy.contains('a', 'Checkout').click();
    }
}
export default productPage;