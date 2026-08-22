describe('alerts handling test', function(){
    it('alerts handling test', function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        // cypress is logging alerts to confirm us that recieved alert and handled it
        cy.get('#alertbtn').click();
        cy.get('#confirmbtn').click();

        // window:alert is the event which get fired on alert open,so you are firing event to get access of alert
        cy.on('window:alert', (str)=>{
            expect(str).to.equal('Hello , share this practice page and share your knowledge');
        })

        // window:confirm
        cy.on('window:confirm', (str)=>{
            expect(str).to.equal('Hello , Are you sure you want to confirm?');
        })
    })
})