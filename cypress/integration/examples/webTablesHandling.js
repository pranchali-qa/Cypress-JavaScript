describe('webTables handling test', () => {
    it('webTables handling test', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        // below each code will get all 2nd column td first from table
        cy.get('tr td:nth-child(2)').each(($el, index, $list) =>{
            // grab text()
            if($el.text().includes('Python'))
            {
                // here eq is used to locate indexed row from scanned row-td then used next method for sibling td
                // here we can not directly use next().text() as it will not resolved by cypress so use then() t resolve promise
                // reference link - https://docs.cypress.io/api/commands/next 
                cy.get('tr td:nth-child(2)').eq(index).next().then(function(price){
                    const priceValue = price.text();
                    expect(priceValue).to.equal('25');
                })
            }
        })

    });
});