/// <reference types="cypress" />

describe("Scénarion de connexion / déconnexion", () => {
  var employeeInfos = {
    lastName:"Poincaré",
    firstName:"Henri",
    employeeId:"1854",
    gender:"Female",
    marital:"Single",
    nation:"64",
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

    after("Logout", () => {
      cy.Logout()
    });
  });
