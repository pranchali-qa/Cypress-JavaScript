// cypress spec file or test file
describe('My first test', function(){
    it('my first test case', function(){
        // visit is like get url in selenium
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');

        // cy.get('input[type="search"]') //using tagname
        // cy.get('.search-keyword').type('ca'); // using class
        cy.get('form input').type('ca'); // using tagname from parent to child traverse

        //common assertion using should which is comes from chai library
        cy.get('.product:visible').should('have.length', 4);
        cy.get('.products').as('productLocator');
        // parent child chaining
        cy.get('@productLocator').find('.product').should('have.length', 4);

        // click on add to cart 2nd product
        cy.get('@productLocator').find('.product').eq(1).contains('ADD TO CART').click();

        // if only text with Capsicum text product name only then go add to cart
        cy.get('@productLocator').find('.product').each(($el, index, $list) => {
            // using tagName.classname to find the product name
            const productName = $el.find('h4.product-name').text();
            if(productName.includes('Capsicum')){
                cy.wrap($el).find('button').click();
            }
        });
    })

})