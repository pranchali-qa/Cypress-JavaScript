describe('checkbox handling test', function(){
    it('checkbox handling test', function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        // check() command for check a checkbox | should('be.checked') - for verify checkbox is checked | and('have.value','option1') command for verify value for checkbox
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1');
        // uncheck() command for uncheck a checkbox | should('not.be.checked') 
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked');
    })
})