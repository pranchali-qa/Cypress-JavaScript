describe('dropdown handling test', function(){
    it('static dropdown handling test', function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('select').select('option1').should('have.value', 'option1')
    })
})