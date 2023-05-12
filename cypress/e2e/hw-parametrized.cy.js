describe('Parametrized test FormLayouts 1', () => {

    beforeEach(() => {
        
        cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
        cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
        cy.get('[title="Forms"]').click();
        cy.get('[title="Form Layouts"]').click();
    })

    const testFormLayouts = (testName, expectedResultName, testEmail, expectedResultEmail) =>

        function () {
            cy.get('[placeholder="Jane Doe"]').type(`${testName}`)
                .should('have.value', `${expectedResultName}`);
            cy.get('.form-inline [placeholder="Email"]').type(`${testEmail}`)
                .should('have.value', `${expectedResultEmail}`);;
        };

    it('Test1', testFormLayouts('Tanya Dyn', 'Tanya Dyn', 'dyntanya@gmail.com', 'dyntanya@gmail.com'));
    it('Test2', testFormLayouts('Elena Bulatova', 'Elena Bulatova', 'bulatik@gmail.com', 'bulatik@gmail.com'));
    it('Test3', testFormLayouts('Slava Perchak', 'Slava Perchak', 'perchak@gmail.com', 'perchak@gmail.com'));
});


describe('Parametrized test FormLayouts 2', () => {

    beforeEach(() => {

        cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
        cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
        cy.get('[title="Forms"]').click();
        cy.get('[title="Form Layouts"]').click();
    })

    const form = [
        { testName: 'Tanya Dyn', expectedResultName: 'Tanya Dyn', testEmail: 'dyntanya@gmail.com', expectedResultEmail: 'dyntanya@gmail.com' },
        { testName: 'Elena Bulatova', expectedResultName: 'Elena Bulatova', testEmail: 'bulatik@gmail.com', expectedResultEmail: 'bulatik@gmail.com' },
        { testName: 'Slava Perchak', expectedResultName: 'Slava Perchak', testEmail: 'perchak1@gmail.com', expectedResultEmail: 'perchak1@gmail.com' }
    ]

    form.forEach(({ testName, expectedResultName, testEmail, expectedResultEmail }) => {
        it(`Test ${testName}`, () => {

            cy.get('[placeholder="Jane Doe"]').type(testName)
                .should('have.value', expectedResultName);
            cy.get('.form-inline [placeholder="Email"]').type(testEmail)
                .should('have.value', expectedResultEmail);
        })
    })
});

