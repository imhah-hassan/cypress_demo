Cypress.Commands.add("EmployeeSearchByName", (name:string) => {
    // Rechercher le salarié Cypress
        cy.get('#menu_pim_viewPimModule > b').click();
        cy.wait(1000);
        cy.get("#empsearch_employee_name_empName").click();
        cy.wait(1000);
        cy.get("#empsearch_employee_name_empName").type(name);
        cy.get("#searchBtn").click();

})
