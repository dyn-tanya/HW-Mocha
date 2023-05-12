//окрім впорядкованості дані діскрайби для того, щоб відокремити деякі методи, такі як before/after

describe.skip('Before', () => {


    before(() => { //вик-ся один раз перед тест сьютом
        cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/')
        cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
        cy.get('[title="Forms"]').click();
        cy.get('[title="Form Layouts"]').click();
    })


    it('Test 1', () => {
        cy.get('[placeholder="Jane Doe"]').type('Hello');

    })

    it('Test 2', () => {
        cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/')
        cy.get('[placeholder="Jane Doe"]').type('Hello');
    })

})

describe('beforeEach', () => {


    beforeEach(() => { //вик-ся кожного разу перед тест сьютом

        cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/')
        cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
        cy.get('[title="Forms"]').click();
        cy.get('[title="Form Layouts"]').click();
    })


    it('Test 1', () => {
        cy.get('[placeholder="Jane Doe"]').type('Hello');

    })

    it('Test 2', () => {

        cy.get('[placeholder="Jane Doe"]').type('Hello');
    })

})



describe('After', () => { //виконуються один раз після сьютів в межах дескрайба


    beforeEach(() => {

        cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/')

        cy.log(`Open Form Layouts...`)
        cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
        cy.get('[title="Forms"]').click();
        cy.get('[title="Form Layouts"]').click();
    })

    after(() => { //вик-ся один раз після всіх сьютів
        cy.log("Hello!"); //запис як логи в додатку

    })


    it('Test 1', () => {
        cy.get('[placeholder="Jane Doe"]').type('Hello');

    })

    it('Test 2', () => {

        cy.get('[placeholder="Jane Doe"]').type('Hello');
    })

})


describe.only('AfterEach', () => { //виконуються після кожного сьюта в межах дескрайба


    beforeEach(() => {

        cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/')

        cy.log(`Open Form Layouts...`)
        cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
        cy.get('[title="Forms"]').click();
        cy.get('[title="Form Layouts"]').click();
    })

    afterEach(() => { //вик-ся після кожного сьюта
        cy.log("Hello!"); //запис як логи в додатку

    })


    it('Test 1', () => {
        cy.get('[placeholder="Jane Doe"]').type('Hello');

    })

    it('Test 2', () => {

        cy.get('[placeholder="Jane Doe"]').type('Hello');
    })

})




it.only('Test retries', {retries: 2}, () => { //для нестабільного інвайременту, кількість повторень (2), після якого можна вважати зафейленим
    cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/')

    cy.log(`Open Form Layouts...`)
    cy.get('[src="assets/images/material-dark-theme.jpg0"]').click();
    cy.get('[title="Forms"]').click();
    cy.get('[title="Form Layouts"]').click();
    cy.get('[placeholder="Jane Doe"]').type('Hello');

})