/// <reference types="cypress" />

describe("Scénarion de connexion / déconnexion", () => {

    before("Login Admin", () => {
      cy.Login()
    });
    it("Add employee", () => {
      cy.fixture("employees").then (employeesInfo=>{
        employeesInfo.forEach((employeeInfo: any) => {
          cy.AddEmployee(employeeInfo)
        });
      })
    });
    it("Search employee by name", () => {
      cy.fixture("employees").then (employeeInfo=>{
        cy.EmployeeSearchByName (employeeInfo[0].lastName)
      })
    });

    it("Address", () => {
      cy.fixture("employees").then (employeeInfo=>{
        cy.EmployeeSearchById(employeeInfo[0].employeeId)
        cy.get('.odd > :nth-child(4) > a').click()
        cy.EmployeeAddress()
      })
  });
    it("Supprimer", () => {
      cy.fixture("employees").then (employeeInfo=>{
        cy.EmployeeSearchById(employeeInfo[0].employeeId)
        cy.DeleteEmployee()
    })
  });

    it("Supprimer tout", () => {
      cy.DeleteAllEmployees()
    });
    it.only("Contact urgence", ()=>{
      cy.fixture("employees").then (employeeInfo=>{
        cy.EmployeeSearchById(employeeInfo[0].employeeId)
        cy.get('.odd > :nth-child(4) > a').click()
        cy.get ("li>a[href*='viewEmergencyContacts']").should("be.visible").click()
        cy.get("#btnAddContact").click()
        cy.get("#emgcontacts_name").clear().type("IMHAH")
        cy.get("#emgcontacts_relationship").clear().type("Fils")
        cy.get("#emgcontacts_homePhone").clear().type("016162636465")
        cy.get("#btnSaveEContact").click()
      })
      
    })
    after("Logout", () => {
      cy.Logout()
    });
  });
