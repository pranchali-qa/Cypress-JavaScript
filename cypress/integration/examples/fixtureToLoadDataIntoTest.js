/// <reference types="Cypress" />

describe('fixture to load data into test', () => {
    let testData; // here global declaration of variable

    // this is fixture execute before all tests in this block
    before(()=>{
        // below code will go fixture folder and search example json file and it will read json and convert entire data into javascript object and it is loaded as data
        cy.fixture('example').then((data)=>{
            testData=data;
        })
    })

    it('fixture to load data into test', ()=>{
        // Cypress.config('defaultCommandTimeout', 6000); // timeout scope is this test case only as implemented inside it
        cy.visit('https://rahulshettyacademy.com/loginpagePractise/');
        cy.get('[name="username"]').type(testData.username); // testData variable can access json parameter like testData.username way
        cy.get('[name="password"]').type(testData.password);
        cy.get('[name="signin"]').click();
        // Cypress.config('defaultCommandTimeout', 6000); // timeout scope for test and from below line of test, rest of previous steps will follow default global timeout
        cy.contains('Shop Name').should('be.visible');
    });
});