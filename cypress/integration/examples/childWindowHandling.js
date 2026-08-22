describe('webTables handling test', () => {
    it('webTables handling test', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        // to get href attribute in JQuery we have prop() method but below line not worked as cypress command + non cypress command
        // cy.get('#openwindow').prop('href');

        // to resolve promise we will use then()
        cy.get('#openwindow').then(function(el){
            const url = el.prop('href');
            // you may think you can use url in cypress visit command to navigate , but didnt worked as domain changed
            cy.visit(url);
            cy.log(url)
            cy.origin(url, { args: { url } }, ({ url }) => {
                        cy.get('.mt-50 h2').should('contain', 'Welcome to QAClick Academy');
            })
        });
    });
});