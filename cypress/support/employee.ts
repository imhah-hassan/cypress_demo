Cypress.Commands.add("EmployeeSearchByName", (name:string) => {
    // Rechercher le salarié Cypress
        cy.get('#menu_pim_viewPimModule > b').click();
        cy.wait(1000);
        cy.get("#empsearch_employee_name_empName").click();
        cy.wait(1000);
        cy.get("#empsearch_employee_name_empName").type(name);
        cy.get("#searchBtn").click();

})
Cypress.Commands.add("AddEmplyee", () => {
    cy.get('#menu_pim_viewPimModule > b').click();
    cy.get("#menu_pim_addEmployee").click({force:true})
    cy.get("#firstName").type("Cypress");
    cy.get("#lastName").type("Demo9905");
    cy.get("#employeeId").type("9903");
    cy.get("#btnSave").click();

})