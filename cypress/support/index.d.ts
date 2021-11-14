/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    Login(): void
    Logout(): void
    SetLanguage(language:string): void
    AddEmployee(lastName:string, firstName:string, employeeId:string): void
    SearchEmployee(lastName:string): void
    EmployeeDetails (gender:string, nation:string, marital:string, dob:string): void
    DeleteEmployee (name:string): void
  }
}