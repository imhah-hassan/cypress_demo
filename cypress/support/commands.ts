Cypress.Commands.add("Login", ()  =>  {
    cy.visit("/auth/login");
    cy.get('#txtUsername').type(Cypress.env ("login"));
    cy.get('#txtPassword').type(Cypress.env ("pwd"));
    cy.get('#btnLogin').click();
    cy.get('#welcome').should("have.text", Cypress.env("Welcome"));
})

Cypress.Commands.add("SetLanguage", (language:string)  =>  {
    cy.visit ("/index.php/admin/localization");
    cy.get("#btnSave").click();
    cy.get("#localization_dafault_language").select (language);
    cy.get("#btnSave").click();
})

Cypress.Commands.add("Logout", ()  =>  {
    cy.get('#welcome').click();
    cy.get("a[href*='auth/logout']").click({force:true});
    cy.get('#logInPanelHeading').should("be.visible").should("have.text", Cypress.env("LoginPanel"));
})
