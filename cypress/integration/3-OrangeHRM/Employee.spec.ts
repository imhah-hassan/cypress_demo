/// <reference types="cypress" />
describe("Scénarion Gestion des salariés", () => {
    before("Se connecter à OrangeHRM", () => {
        cy.Login()
    });

    it("Ajouter un salarié", () => {
        let id=(Math.floor (Math.random ()*10000)+90000).toString()
        cy.AddEmployee("Cypress" + id, "Demo" + id, id);
    });
    it("Saisir le détail", () => {
        cy.SearchEmployee("Cypress");
        // Afficher le détail du salarié
        cy.contains ("Cypress").click()
        cy.EmployeeDetails ("1", "French", "Single", "1989-05-15");

    });
    it("Rechercher un salarié", () => {
        cy.SearchEmployee("Cypress");
    });
    it("Supprimé un salarié", () => {
        cy.DeleteEmployee("Cypress");
    });
    after("Se déconnecter de OrangeHRM", () => {
        cy.Logout()
    });
  });
