/// <reference types="cypress" />
describe("Scénarion Gestion des salariés", () => {
    before("Se connecter à OrangeHRM", () => {
        cy.Login()
    });

    it("intercept", () => {
        cy.visit ("/index.php/pim/viewEmployeeList")
        // Alias the route to wait for its response
        cy.intercept('GET', '**/getEmployeeListAjax').as('employeeList')
        cy.get("#searchBtn").click()
        cy.wait('@employeeList').its('response.statusCode').should('eq', 200)
    });

    it("intercept and stub", () => {
        cy.visit ("/index.php/pim/viewEmployeeList")
        // Stub a response to GET getEmployeeListAjax ****
        cy.intercept({
            method: 'GET',
            url: '**/getEmployeeListAjax',
        }, {
            statusCode: 200,
            body: [{"name":"Bob Leponge","id":"11"}, {"name":"Bob Renard","id":"21"}, {"name":"Bob Atomic","id":"31"}],
            headers: { 'Content-Type': 'text/html; charset=utf-8' },
            delayMs: 500,
        }).as('myEmployeeList')

        cy.wait(1000);
        cy.get("#empsearch_employee_name_empName").click().clear();
        cy.wait(1000);
        cy.get("#empsearch_employee_name_empName").type("Bob");
        cy.wait(3000);

        cy.wait('@myEmployeeList').its('response.statusCode').should('eq', 200)
        cy.get("div.ac_results ul li").should ("have.length", 3)


    });


    after("Se déconnecter de OrangeHRM", () => {
        cy.Logout()
    });
  });
