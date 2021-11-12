Cypress.Commands.add("Login", () => {
    cy.visit("/");
    cy.get('#txtUsername').type(Cypress.env ("login"));
    cy.get('#txtPassword').type(Cypress.env ("pwd"));
    cy.get('#btnLogin').click();
    cy.get('#welcome').should("have.text", "Welcome Paul");

})

Cypress.Commands.add("Logout", () => {
    cy.get('#welcome').click();
    cy.get("a[href*='auth/logout']").click({force:true});
    cy.get('#logInPanelHeading').should("be.visible").should("have.text", "LOGIN Panel");
})
