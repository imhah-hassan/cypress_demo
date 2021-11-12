/// <reference types="cypress" />
describe("Scénarion Gestion des salariés", () => {
    before("Se connecter à OrangeHRM", () => {
        cy.Login();
    });
    it("Ajouter un salarié", () => {
        cy.AddEmplyee()

    });
    it("Saisir le détail", () => {
        cy.EmployeeSearchByName("Cypress")
        // Afficher le détail du salarié
        cy.get('.odd > :nth-child(3) > a').click()

        cy.get("#btnSave").should("have.value", "Edit").click();
        cy.get("#personal_optGender_1").click();
        cy.get("#personal_cmbNation").select ("French");
        cy.get("#personal_cmbMarital").select ("Single");
        cy.get("#personal_DOB").clear().type("1989-11-13");
        cy.get("#btnSave").should("have.value", "Save").click();


    });
    it("Rechercher un salarié", () => {
    });
    after("Se déconnecter de OrangeHRM", () => {
        cy.Logout()
    });
  });
