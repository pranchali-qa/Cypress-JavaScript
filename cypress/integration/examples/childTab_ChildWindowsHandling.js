/// <reference types="Cypress" />   // added this line for autosuggestion invoke at IDE - https://docs.cypress.io/app/tooling/IDE-integration
describe('alerts handling test', () => {
    it('alerts handling test', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        
        cy.get('#opentab').invoke('removeAttr', 'target').click();

        cy.origin('https://www.qaclickacademy.com/',() => 
        {
            cy.get('.mt-50 h2').should('contain', 'Welcome to QAClick Academy');
        })
    });
    
});