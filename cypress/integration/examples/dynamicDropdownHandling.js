describe('dropdown handling test', function(){
    it('dynamic dropdown handling test', function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#autocomplete').type('ind');

        // here .ui-menu-tem is class for each li - and in search of ind we have 3 li so with space added div tag as it is child of li and having text fro option
        cy.get('.ui-menu-item div').each(($el, index, $list) => {
            ($el.text() === 'India')
            {
                $el.click();
            }
        });
        
        // verify using should('have.value', 'actualValue')
        cy.get('#autocomplete').should('have.value', 'India')
    })
})