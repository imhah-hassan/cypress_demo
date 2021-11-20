/// <reference types="cypress" />
describe("Scénarion de connexion / déconnexion", () => {
    let matricule = "123456"
    before("Login Admin", () => {
		  cy.visit("/auth/login");
      cy.get('#txtUsername').type("Admin")
      cy.get('#txtPassword').type("Test.IT$2021")
      cy.get('#btnLogin').click()
      cy.get('#welcome').should ("have.text", "Bienvenue Hassan")
    });
    it("Add employee", () => {
      cy.get('#menu_pim_addEmployee').click({force:true});
      cy.get('h1').should("have.text", "Ajouter un employé")
      cy.get('#firstName').clear().type("Demo");
      cy.get('#employeeId').clear().type(matricule);
      cy.get('#lastName').clear().type("Cypress");
      cy.get('#btnSave').click()
      cy.get('#pdMainContainer > .head > h1').should("have.text", "Informations personnelles")
      cy.get('#personal_txtEmpFirstName').should("be.disabled");
      cy.get('#personal_txtEmpLastName').should("be.disabled");
  
      cy.get('#btnSave').should("have.value", "Modifier").click();
      cy.get('#personal_txtEmpFirstName').should("have.value", "Demo");
      cy.get('#personal_optGender_1').click();
      cy.get('#personal_cmbMarital').select("Single");
      cy.get('#personal_cmbNation').select("Français");
      cy.get('#personal_DOB').clear().type("2000-12-15")
      cy.get('#btnSave').should("have.value", "Sauvegarder").click();
  
  
      cy.get('#personal_txtEmpFirstName').should("be.disabled");
      cy.get('#personal_txtEmpLastName').should("be.disabled");
        
    });
    it("Search employee by name", () => {
      cy.get("#menu_pim_viewPimModule").click();
      cy.url().should("include", "index.php/pim/viewEmployeeList");
      cy.get('#menu_pim_viewEmployeeList').click({force:true})
  
      cy.get('#employee-information > .head > h1').should("have.text", "Informations sur les employés")
      cy.wait (2000)
      cy.get('#empsearch_employee_name_empName').click();
      cy.wait (1000)
      cy.get('#empsearch_employee_name_empName').clear().type("Cypress{enter}", {delay:100});
      cy.get('#empsearch_id').click()
      cy.get('#searchBtn').click()
      cy.get('.odd > :nth-child(4) > a').should ("have.text", "Cypress")
    });

    it("Address", () => {
      cy.get("#menu_pim_viewPimModule").click();
      cy.url().should("include", "index.php/pim/viewEmployeeList");
      cy.get('#menu_pim_viewEmployeeList').click({force:true})
      cy.get('#employee-information > .head > h1').should("have.text", "Informations sur les employés")
      cy.get('.odd > :nth-child(4) > a').should ("have.text", "Cypress").click()
      cy.contains ("Coordonnées").click()
      cy.get('#btnSave').should("have.value", "Modifier").click()
      cy.get('#contact_street1').clear().type("29 Rue des sablons")
      cy.get('#contact_city').clear().type("Paris")
      cy.get('#contact_province').clear().type("Paris")
      cy.get('#contact_emp_zipcode').clear().type("75008")
      cy.get('#contact_country').select ("France")
      cy.get('#contact_emp_mobile').clear().type("06 44 55 66 77")
      cy.get('#contact_emp_oth_email').clear().type("demo.cypress@onepoint.test")
      cy.get('#btnSave').should("have.value", "Sauvegarder").click()
      cy.get('#contact_street1').should ("be.disabled")
    });
    it("Supprimer", () => {
      cy.get("#menu_pim_viewPimModule").click();
      cy.url().should("include", "index.php/pim/viewEmployeeList");
      cy.get('#menu_pim_viewEmployeeList').click({force:true})
      cy.get('#empsearch_id').clear().type(matricule);
      cy.get('#searchBtn').click()
      cy.get("table#resultTable>tbody>tr>td>input[type='checkbox']").click()
      cy.get('#btnDelete').click()
      cy.get('#deleteConfModal > .modal-header > h3').should ("contain", "Confirmation requise")
      cy.get('#dialogDeleteBtn').click()
      cy.get('td').should("have.text", "Aucun Résultat")
    });

    after("Logout", () => {
      cy.get('#welcome').click()
      cy.contains ("Déconnexion").click()
      cy.get('#txtUsername').should("be.visible")
    });
  });
