/// <reference types="Cypress" />

describe('environment variable handling test', () => {
    it('environment variable handling test', ()=>{
        // here Cypress.env('url') is deprecated so use like this.
        cy.env(['url']).then((env)=>{
            cy.visit(env.url+"AutomationPractice/")
        })
    });
});