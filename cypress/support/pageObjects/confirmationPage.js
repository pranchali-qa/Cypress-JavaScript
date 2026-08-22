class confirmationPage{

    enterCountryName(){
        cy.get('#country').type('India');
    }

    clickOnPurchaseButton(){
        cy.get('input[value="Purchase"]').click();
    }

    verifyPurchaseAlert(){
        cy.get('.alert').should('contain',' Thank you! Your order will be delivered in next few weeks :-).')
    }
}

export default confirmationPage;