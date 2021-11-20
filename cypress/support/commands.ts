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
    cy.request({ method: "GET", url: "/auth/logout" });
    cy.visit("/")
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
            txtUsername: Cypress.env ("login"),
            txtPassword: Cypress.env ("pwd"),
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
