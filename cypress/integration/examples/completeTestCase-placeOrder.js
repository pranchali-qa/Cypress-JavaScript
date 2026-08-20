describe('complete place order test', function(){

    it('place order test case', function(){
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('.search-keyword').type('ca');
        cy.get('.products').find('.product').each(($el, index, $list) => {
            const productName = $el.find('h4.product-name').text();
            if(productName.includes('Capsicum'))
            {
                cy.wrap($el).find('button').click();
            }
        });

        cy.get('.cart-icon > img').click();
        cy.contains('PROCEED TO CHECKOUT').click();
        cy.contains('Place Order').click();
        cy.get('.chkAgree').click();
        cy.get('button').click();
    });
});
