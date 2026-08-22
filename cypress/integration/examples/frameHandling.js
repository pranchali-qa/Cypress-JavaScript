/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'

describe('frame handling test', () => {
    it('frame handling test', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        // frameloaded will give knowledge to cypress frame is loaded,
        //install plugin npm install -D cypress-iframe
        cy.get('#courses-iframe').invoke('attr', 'src').then((iframeSrc) => {
    
            cy.origin('https://legacy.rahulshettyacademy.com/', () => {
            
            cy.visit('/')
            
            cy.contains('Mentorship').click()
            cy.get('.pricing-container').should('have.length', 2)
            })
        })
        
    });
});