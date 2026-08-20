describe('radio button handling test', function(){
    it('radio button handling test', function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        // checked radio button
        cy.get('input[value="radio1"]').check().should('be.checked');
    })
})