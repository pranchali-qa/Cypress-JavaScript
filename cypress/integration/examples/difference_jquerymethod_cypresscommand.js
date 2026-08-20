// cypress spec file or test file
describe('My first test', function(){
    it('my first test case', function(){
        // visit is like get url in selenium
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');

        // want to get logo text
        // const logo_text = cy.get('.brand');
        // cy.log(logo_text.text()); // this will give error - logo_text.text is not a function


        // reason that cypress internally handles promise this is original behaviour of cypress and if we give text function to variable logo_text then it will confuse and give error , so 2 ways
        // use cy.get('.brand').text() or resolve promise by manually like below code

        cy.get('.brand').then(function(logoText){
            cy.log(logoText.text());
        })

        // here then method is wait until promise is resolved, and then open a function and resolved promise throw resolved variable logoText

        // if another way to get text
        // cy.get('.brand').text();   // just now we seen child command text() wait until parent command get() promise get resolved and internally it resolved own promise, But text() is a command
        cy.get('.brand').should('have.text', 'GREENKART')
    })

})