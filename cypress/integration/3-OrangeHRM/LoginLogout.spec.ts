/// <reference types="cypress" />
describe("Scénarion de connexion / déconnexion", () => {
    before("Ouvrir la page d'accueil", () => {
		  cy.visit("/auth/login");
    });
    it("Se connecter et vérifier le nom de la personne connectée", () => {
      cy.HttpLogin()
    });
    it("Se déconnecter", () => {
      cy.HttpLogout()
    });
    after("S'exécute une seule fois à la fin du scénario", () => {
    });
  });
