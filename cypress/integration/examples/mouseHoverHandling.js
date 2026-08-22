describe('webTables handling test', () => {
    it('webTables handling test', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        // using JQuery method show() >> below code to show hidden element after hover and do click action
        // cy.get('.mouse-hover-content').invoke('show');
        // cy.contains('Top').click();
        // cy.url().should('include','top');

        // if we dont invoke show see below , it will give error - This element <a> is not visible because its parent <div.mouse-hover-content> has CSS property: display: none
        // cy.contains('Top').click();
        // cy.url().should('include','top');

        // using force : true >> how ever in cypress there is provision that cypress check hidden element also and click on that
        cy.contains('Top').click({force : true});
        cy.url().should('include','top');
    });
});