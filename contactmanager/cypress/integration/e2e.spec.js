

context("contact managee e2e test cases",()=>{
    beforeEach(()=>
    {
        cy.visit("/"); //cy-predefined cypress object
    });
    it("check for wrong credentials",()=>
    {
        cy.get('#username').type('admin');
        cy.get('#password').type('12346');
        cy.get('#button').click();
        cy.get('.alert').should('have.text','Invalid username or password')
    });
    it("should check for right credentials",()=>
    {
        cy.get('#username').type('admin');
        cy.get('#password').type('password');
        cy.get('#button').click();
        cy.get('#maincomp').should('have.text','Contact List')
    })
    it("shouid add new contact",()=>{
        cy.get('#username').type('admin');
        cy.get('#password').type('password');
        cy.get('#button').click();
        cy.visit("/addcontact")
        cy.get('#fname').type('ram');
        cy.get('#lname').type('charan');
        cy.get('#email').type('r1@gmail.com');
        cy.get('#phone').type('789972282');
        cy.get('#btnadd').click();
        cy.get('.card-title').contains('ram charan');
    })
    
});