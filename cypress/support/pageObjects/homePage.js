class homePage{

    login(username,password)
    {
        cy.get('[name="username"]').type(username); 
        cy.get('[name="password"]').type(password);
        cy.get('[name="signin"]').click();
    }

    goto(url)
    {
        cy.visit(url);
    }
}
export default homePage;