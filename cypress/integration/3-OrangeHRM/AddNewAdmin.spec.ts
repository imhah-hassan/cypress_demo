/// <reference types="cypress" />
describe("Initialisation des données", () => {
    before("Ouvrir la page d'accueil", () => {
      cy.visit("/");
      cy.get('#txtUsername').type("admin");
      cy.get('#txtPassword').type("admin123");
      cy.get('#btnLogin').click();
    });
    it("Langue : EN", () => {
      cy.visit ("/index.php/admin/localization");
      cy.get("#btnSave").click();
      cy.get("#localization_dafault_language").select ('en_US');
      cy.get("#btnSave").click();
      });

    it("Add new employee", () => {
      cy.visit('/index.php/pim/addEmployee');
      cy.get('#firstName').clear().type("Hassan");
      cy.get('#employeeId').clear().type("9000");
      cy.get('#lastName').clear().type("IMHAH");
      cy.get('#btnSave').click()
    });

    it("Add new admin", () => {
      cy.visit('/index.php/admin/saveSystemUser');

      cy.wait (2000)
      cy.get('#systemUser_employeeName_empName').click();
      cy.wait (1000)
      cy.get('#systemUser_employeeName_empName').clear().type("Hassan IMHAH{enter}", {delay:100});

      cy.get('#systemUser_userName').clear().type("himhah")
      cy.get('#systemUser_password').clear().type("Hassan$2022")
      cy.get('#systemUser_confirmPassword').clear().type("Hassan$2022")

      cy.get('#systemUser_userType').select("1");
      cy.get('#btnSave').click();
      cy.wait(2000);
      cy.visit('/index.php/admin/saveSystemUser');
    });
    
    it("Check new admin", () => {
      cy.request({ method: "GET", url: "/auth/logout" });
      cy.visit("/");
      cy.get('#txtUsername').type("himhah");
      cy.get('#txtPassword').type("Hassan$2022");
      cy.get('#btnLogin').click();
      cy.get('#welcome').should ("be.visible").should ("have.text", "Welcome Hassan");
    });
  
    after("Logout", () => {
      cy.request({ method: "GET", url: "/auth/logout" });
      cy.visit("/")
      });
  });
