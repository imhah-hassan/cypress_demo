/// <reference types="cypress" />
describe("Reset all config", () => {
    before("Login", () => {
        cy.HttpLogin()
    });
    it.only("Delete config", () => {
        cy.visit ("/admin/viewJobTitleList")
        cy.DeleteAll()
        cy.visit ("/admin/jobCategory")
        cy.DeleteAll()
        cy.visit ("/admin/employmentStatus")
        cy.DeleteAll()
        cy.visit ("/admin/viewPayGrades")
        cy.DeleteAll()
        cy.visit ("/admin/viewLocations")
        cy.DeleteAll()
        
    });
    it ("Create employees", ()=>{
        cy.fixture("employees").then (employeesInfo=>{
            employeesInfo.forEach((employeeInfo: any) => {
              cy.AddEmployee(employeeInfo)
            });
          })
    })
    it("Delete all employees", () => {
        cy.DeleteAllEmployees()
    });
    after("Logout", () => {
        cy.HttpLogout()
    });
  });
