/// <reference types="cypress" />
describe("Scénarion de connexion / déconnexion", () => {
    before("Ouvrir la page d'accueil", () => {
		cy.visit("/");
    });
    it("Se connecter et vérifier le nom de la personne connectée", () => {
        cy.get('#txtUsername').type("Admin");
        cy.get('#txtPassword').type("admin123");
        cy.get('#btnLogin').click();
        cy.get('#welcome').should ("have.text", "Welcome Paul");
    });
    it("Se déconnecter", () => {
        cy.get('#welcome').click();
        cy.get('#welcome-menu > :nth-child(1) > :nth-child(3) > a').click();
        cy.get('#divLogo > img').should("be.visible");
    });
    after("S'exécute une seule fois à la fin du scénario", () => {
    });
  });
