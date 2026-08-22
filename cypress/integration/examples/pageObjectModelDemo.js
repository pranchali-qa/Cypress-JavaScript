/// <reference types="Cypress" />
import homePage from '../../support/pageObjects/homePage';
import productPage from '../../support/pageObjects/productPage';
import cartPage from '../../support/pageObjects/cartPage';
import confirmationPage from '../../support/pageObjects/confirmationPage';

describe('page object model demo', () => {
    let testData; 
    let homePageObject;
    let productPageObject;
    let cartPageObject;
    let confirmationPageObject;

    before(()=>{
        cy.fixture('example').then((data)=>{
            testData=data;
            productPageObject = new productPage();
            homePageObject = new homePage();
            cartPageObject = new cartPage();
            confirmationPageObject = new confirmationPage();
        })
    })

    it('page object model demo', ()=> {
        const url='https://rahulshettyacademy.com/loginpagePractise/';
        
        homePageObject.goto(url);
        homePageObject.login(testData.username,testData.password)

        productPageObject.pageValidation();
        productPageObject.verifyCardLimit();
        productPageObject.selectProduct(testData.productName);
        productPageObject.gotToCard();

        cartPageObject.verifyProductOnCard(testData.productName)
        cartPageObject.clickCheckOut();

        confirmationPageObject.enterCountryName();
        confirmationPageObject.clickOnPurchaseButton();
        confirmationPageObject.verifyPurchaseAlert();
    })
});