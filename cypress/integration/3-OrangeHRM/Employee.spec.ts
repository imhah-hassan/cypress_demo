/// <reference types="cypress" />

describe("Scénarion de connexion / déconnexion", () => {
  var employeeInfos = {
    lastName:"Poincaré",
    firstName:"Henri",
    employeeId:"1854",
    gender:"Female",
    marital:"Single",
    nation:"Français",
    dob:"2000-12-15"
  }

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
      cy.EmployeeSearchById(employeeInfos.employeeId)
      cy.get('.odd > :nth-child(4) > a').click()
      cy.EmployeeAddress()
    });
    it("Supprimer", () => {
      cy.EmployeeSearchById(employeeInfos.employeeId)
      cy.DeleteEmployee()
    });

    it("Supprimer tout", () => {
      cy.DeleteAllEmployees()
    });
    it("Contact urgence", ()=>{
      cy.visit("/pim/viewEmergencyContacts/empNumber/1226")
      cy.get("#btnAddContact").click()
      cy.get("#emgcontacts_name").clear().type("IMHAH")
      cy.get("#emgcontacts_relationship").clear().type("Fils")
      cy.get("#emgcontacts_homePhone").clear().type("016162636465")
      cy.get("#btnSaveEContact").click()
      
    })
    it.only("Emploi", ()=>{
      cy.visit("/pim/viewJobDetails/empNumber/1226")

    })
    after("Logout", () => {
      cy.Logout()
    });
  });
