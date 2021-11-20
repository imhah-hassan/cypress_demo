/// <reference types="cypress" />
describe("Scénarion Gestion des salariés", () => {
    before("Se connecter à OrangeHRM", () => {
        cy.Login()
    });
    it("Locators first children last", () => {
        cy.get("#welcome-menu")
        .find("ul")
        .first()
        .children()
        .should('have.length', 4)
        .last()
        .should('have.text', "Logout")
    });
    it("Locators parent", () => {
        cy.visit ("/index.php/pim/viewEmployeeList")
        cy.contains('Cypress92534')
        .parent()
        .parent()
        .find('input[type=checkbox]')
        .check()
    });
    it("Alias", () => {
        cy.visit ("/index.php/pim/viewEmployeeList")
        cy.get('#resultTable')
            .find('tbody>tr').first()
            .find('td').first()
            .find('input').as('firstEmployee')
        cy.get('@firstEmployee').check()
    });

    it ("find descendent", () => {
        cy.visit ("/index.php/pim/viewEmployeeList")
        cy.get('#resultTable')
            .find('tr')
            .last()
            .find('td')
            .should('have.length', 8)
    });

    it.only ("next", () => {
        cy.visit ("/index.php/pim/viewEmployeeList")

        cy.contains('Employee Name')
          .next().clear().type("Hello")
        
        cy.get("div#welcome-menu>ul>li>a[href*='support']")
          .parent()
          .next()
          .find("a")
          .click({force: true})
        cy.get('#UserHeading').should("have.text", "Change Password")

    });


    after("Se déconnecter de OrangeHRM", () => {
        cy.Logout()
    });
  });
