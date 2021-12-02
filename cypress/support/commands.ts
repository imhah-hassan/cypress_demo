
Cypress.Commands.add("Login", () => {
    cy.visit("/auth/login");
    cy.get('#txtUsername').type(Cypress.env("login"))
    cy.get('#txtPassword').type(Cypress.env("pwd"))
    cy.get('#btnLogin').click()
    cy.get('#welcome').should ("have.text", Cypress.env("Welcome"))
})
Cypress.Commands.add("Logout", () => {
    cy.get('#welcome').click()
    cy.contains ("Logout").click({force:true})
    cy.get('#txtUsername').should("be.visible")
})

Cypress.Commands.add("HttpLogin", () => {
    cy.request({
        method: "GET",
        url: "/auth/login",
      }).then((resp) => {
        expect(resp.status).to.eq(200);
        const $html = Cypress.$(resp.body);
        const csrf = $html.find("input[id=csrf_token]").val();
        // cy.log(csrf.toString());
        cy.request({
          method: "POST",
          url: "/auth/validateCredentials",
          form: true,
          body: {
            txtUsername: Cypress.env("login"),
            txtPassword: Cypress.env("pwd"),
            _csrf_token: csrf,
            Submit: "CONNEXION",
          },
        }).then((resp) => {
          expect(resp.status).to.eq(200);
          cy.visit("/pim/viewEmployeeList");
        });
      });
  })

Cypress.Commands.add("HttpLogout", () => {
    cy.request({ method: "GET", url: "/auth/logout" });
    cy.visit("/")
})

Cypress.Commands.add("DeleteAll", () => {
  cy.get("#resultTable").find("tr").find("td").then((row) => {
      if (row.text() != 'Aucun Résultat') {      
        cy.get('#ohrmList_chkSelectAll').click()
        cy.get('#btnDelete').click()
        cy.get('#deleteConfModal > .modal-header > h3').should ("contain", Cypress.env("ConfirmationRequired"))
        cy.get('#dialogDeleteBtn').click()
      }
      else
        cy.log (row.text())
    })
})
Cypress.Commands.add("CheckMenu", (menuId:string, menuTitle:string, url:string) => {
  cy.get('#menu_'+menuId).click({force:true});
  cy.get('h1').should("contain.text", menuTitle)
  cy.url().should("include", url);


})
