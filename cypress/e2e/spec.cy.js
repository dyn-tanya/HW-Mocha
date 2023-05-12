
// only - запускається тільки цей тест
// skip - пропускається тест


describe('Positive Test suite', () => {
    it('Test 1', () => {
        cy.visit('https://example.com')
    })

    it('Test 2', () => {
        cy.visit('https://example.com')
    })

    it.skip('Test 3', () => {
        cy.visit('https://example.com')
    })

    it('Test 4', () => {
        cy.visit('https://example.com')
    })
})

describe('Negative Test suite', () => {
    it('Test 1', () => {
        cy.visit('https://example.com')
    })

    it('Test 2', () => {
        cy.visit('https://example.com')
    })

    it('Test 3', () => {
        cy.visit('https://example.com')
    })

    it('Test 4', () => {
        cy.visit('https://example.com')
    })
})

describe('Some another test suite', () => {
    it('Test 1', () => {
        cy.visit('https://example.com')
    })

    it('Test 2', () => {
        cy.visit('https://example.com')
    })

    it('Test 3', () => {
        cy.visit('https://example.com')
    })

    it('Test 4', () => {
        cy.visit('https://example.com')
    })

    describe('Some another suite', () => {  //можна робити будь яку вкладеність, яка потрібна, вкладувати дескрайб в дескрайб
        it('Test 1', () => {
            cy.visit('https://example.com')
        })
    
        it('Test 2', () => {
            cy.visit('https://example.com')
        })
    
        it('Test 3', () => {
            cy.visit('https://example.com')
        })
    
        it('Test 4', () => { 
            cy.visit('https://example.com')
        })
    })


})

