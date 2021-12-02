let deleteAll = function(){
    cy.get("#resultTable").find("tr").then((row) => {
        if (row.length>10) {
            cy.DeleteAll()
            deleteAll()
        }
        else
            return
    })
}

Cypress.Commands.add("AddEmployee", (emp) => {
    cy.get('#menu_pim_addEmployee').click({force:true});
    cy.get('h1').should("have.text", Cypress.env("AddEmployee"))
    cy.get('#firstName').clear().type(emp.firstName);
    cy.get('#employeeId').clear().type(emp.employeeId);
    cy.get('#lastName').clear().type(emp.lastName);
    cy.get('#btnSave').click()
    cy.get('#pdMainContainer > .head > h1').should("have.text", Cypress.env("PersonalDetails"))
    cy.get('#personal_txtEmpFirstName').should("be.disabled");
    cy.get('#personal_txtEmpLastName').should("be.disabled");

    cy.get('#btnSave').should("have.value", Cypress.env("Edit")).click();
    cy.get('#personal_txtEmpFirstName').should("have.value", emp.firstName);
    if (emp.gender=='Male') {
        cy.get('#personal_optGender_1').click();
    }
    else {
        cy.get('#personal_optGender_2').click();
    }
    
    cy.get('#personal_cmbMarital').select(emp.marital);
    cy.get('#personal_cmbNation').select(emp.nation);
    cy.get('#personal_DOB').clear().type(emp.dob)
    cy.get('#btnSave').should("have.value", Cypress.env("Save")).click();


    cy.get('#personal_txtEmpFirstName').should("be.disabled");
    cy.get('#personal_txtEmpLastName').should("be.disabled");
})
Cypress.Commands.add("EmployeeSearchByName", (name:string) => {
    cy.get("#menu_pim_viewPimModule").click();
    cy.url().should("include", "index.php/pim/viewEmployeeList");
    cy.get('#menu_pim_viewEmployeeList').click({force:true})

    cy.get('#employee-information > .head > h1').should("have.text", Cypress.env("PersonalDetails"))
    cy.wait (2000)
    cy.get('#empsearch_employee_name_empName').click();
    cy.wait (1000)
    cy.get('#empsearch_employee_name_empName').clear().type(name + "{enter}", {delay:100});
    cy.get('#empsearch_id').click()
    cy.get('#searchBtn').click()
    cy.get('.odd > :nth-child(4) > a').should ("have.text", name)

})
Cypress.Commands.add("EmployeeSearchById", (matricule:string) => {
    cy.get("#menu_pim_viewPimModule").click();
    cy.url().should("include", "index.php/pim/viewEmployeeList");
    cy.get('#menu_pim_viewEmployeeList').click({force:true})
    cy.get('#empsearch_id').clear().type(matricule);
    cy.get('#searchBtn').click()

})
Cypress.Commands.add("EmployeeAddress", () => {
    cy.contains ("Coordonnées").should("be.visible").click()
    cy.get('#btnSave').should("have.value", Cypress.env("Edit")).click()
    cy.get('#contact_street1').clear().type("29 Rue des sablons")
    cy.get('#contact_city').clear().type("Paris")
    cy.get('#contact_province').clear().type("Paris")
    cy.get('#contact_emp_zipcode').clear().type("75008")
    cy.get('#contact_country').select ("France")
    cy.get('#contact_emp_mobile').clear().type("06 44 55 66 77")
    cy.get('#contact_emp_oth_email').clear().type("demo.cypress@onepoint.test")
    cy.get('#btnSave').should("have.value", Cypress.env("Save")).click()
    cy.get('#contact_street1').should ("be.disabled")

})
Cypress.Commands.add("DeleteEmployee", () => {
    cy.get("table#resultTable>tbody>tr>td>input[type='checkbox']").click()
    cy.get('#btnDelete').click()
    cy.get('#deleteConfModal > .modal-header > h3').should ("contain", Cypress.env("ConfirmationRequired"))
    cy.get('#dialogDeleteBtn').click()
    cy.get('td').should("have.text", Cypress.env("NoRecords"))

})

Cypress.Commands.add("DeleteAllEmployees", () => {
    deleteAll()
})


