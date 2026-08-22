/// <reference types="Cypress" />

describe('calendar handling test', () => {
    it('calendar handling test', ()=>{
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');

        cy.get('a').contains('Top Deals').invoke('removeAttr', 'target').click();

        // cy.get('input[name="month"]').click();

        const month = "June";
        const m = '6';
        const day = "15";
        const year = "2027";
        const expectedList = [m,day,year];

        cy.get('.react-date-picker__calendar-button__icon').click();
        cy.get('.react-calendar__navigation__label').click();
        cy.get('.react-calendar__navigation__label').click();
        cy.contains('button',year).click();
        cy.contains('button',month).click();
        cy.contains('.react-calendar__month-view__days button abbr',day).click(); 

        // assertion for 06/15/2027
        cy.get('.react-date-picker__inputGroup__input').each(($el, index, $list) => {
            cy.wrap($el).invoke('val').should('eq',expectedList[index]);
        });
    })
});