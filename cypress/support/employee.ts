Cypress.Commands.add("AddEmployee", (lastName:string, firstName:string, employeeId:string)  =>  {
    cy.get('#menu_pim_viewPimModule > b').click();
    cy.get("#menu_pim_addEmployee").click({force:true})
    cy.get("#firstName").type(lastName);
    cy.get("#lastName").clear().type(firstName);
    cy.get("#employeeId").clear().type(employeeId);
    cy.get("#btnSave").click();
    cy.get('#profile-pic > h1').should ("have.text", lastName + " " + firstName);
})
Cypress.Commands.add("SearchEmployee", (lastName:string)  =>  {
    // Rechercher le salarié Cypress
    cy.get('#menu_pim_viewPimModule > b').click();
    cy.wait(1000);
    cy.get("#empsearch_employee_name_empName").click().clear();
    cy.wait(1000);
    cy.get("#empsearch_employee_name_empName").type(lastName);
    cy.get("#searchBtn").click();
    
    cy.get("#resultTable").find("tr").find("td").should("contain", lastName);
})
Cypress.Commands.add("EmployeeDetails", (gender:string, nation:string, marital:string, dob:string)  =>  {
    cy.get("#btnSave").should("have.value", Cypress.env("Edit")).click();
    cy.get("#personal_optGender_" + gender).click();
    cy.get("#personal_cmbNation").select (nation);
    cy.get("#personal_cmbMarital").select (marital);
    cy.get("#personal_DOB").clear().type(dob);
    cy.get("#btnSave").should("have.value", Cypress.env("Save")).click();
    
    cy.get('#personal_DOB').should ("have.value", dob)
})

Cypress.Commands.add("DeleteEmployee", (lastName:string) => {
    cy.SearchEmployee (lastName)
    cy.get("table#resultTable>tbody>tr>td>input[type='checkbox']").click()
    cy.get('#btnDelete').click()
    cy.get('#deleteConfModal > .modal-header > h3').should ("contain", Cypress.env("ConfirmationRequired"))
    cy.get('#dialogDeleteBtn').click()
    cy.get("#resultTable").find("tr").find("td").should("have.text", Cypress.env("NoRecords"))

})


