class cartPage{
    verifyProductOnCard(productName)
    {
        cy.contains(productName).should('be.visible')
    }

    clickCheckOut(){
        cy.contains('Checkout').click();
    }
}
export default cartPage;