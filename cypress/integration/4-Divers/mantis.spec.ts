/// <reference types="cypress" />
describe("MantisBT Defect", () => {
    before("Logon", () => {
		cy.visit("/index.php");
        cy.get('#username').clear().type("Administrator");
        cy.get("input[type='submit']").click();
        cy.get('#password').clear().type("Hassan$2022");
        cy.get("input[type='submit']").click();
        cy.get('.user-info').should("have.text", "administrator")

    });
Cypress._.times(100, (k) => {
    it("Add bug", () => {
        let id=(Math.floor (Math.random ()*10000)+90000).toString()

        cy.get("a.btn[href*='bug_report_page']").click();
        cy.get("h4").should("contain", "Saisissez les détails de l’anomalie");
        cy.get('#category_id').select("Bug");
        cy.get('#reproducibility').select("10");
        cy.get('#severity').select("60");
        cy.get('#priority').select("40");
        cy.get('#handler_id').select("administrator");
        cy.get('#summary').clear().type ("[BUG]["+id+"]Erreur création anomalie");
        cy.get('#description').clear().type ("["+id + "]   Erreur création anomalie choix severity incorrect dans la liste");
        cy.get("input[type='submit']").click();
        cy.get('td.bug-summary').should("contain", id);

    });
});


    after("Logout", () => {
        cy.get('.user-info').click();
        cy.get("a[href*='logout_page']").click();

    });
  });
