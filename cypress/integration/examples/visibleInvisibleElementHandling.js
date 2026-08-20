describe('visible invisible element handling', function(){
    it('visible invisible element handling test', function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        // default below element is visible so verify using be.visible as its behaviour
        cy.get('#displayed-text').should('be.visible');
        cy.get('#hide-textbox').click();
        // hide element and verify using not.be.visible
        cy.get('#displayed-text').should('not.be.visible');
        cy.get('#show-textbox').click();
        // show element and verify using be.visible
        cy.get('#displayed-text').should('be.visible');
    })
})
