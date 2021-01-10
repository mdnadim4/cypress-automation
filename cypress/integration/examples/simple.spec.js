/// <reference types="Cypress" />

describe('Browser Actions', () => {
    // it('Should load correct url', () => {
    //     cy.visit('https://www.amazon.com/', { timeout: 20000 })
    // })

    // it('Should check the correct url', () => {
    //     cy.url().should('include', 'amazon.com')
    // })

    // it('Should wait for 3 seconds', () => {
    //     cy.wait(3000)
    // })

    // it('Should pause for execution', () => {
    //     cy.pause()
    // })

    // it('Should check the visibility of logo element', () => {
    //     cy.get('#nav-logo').should('be.visible')
    // })

    it('Should load book website', () => {
        cy.visit('http://books.toscrape.com/', { timeout: 10000 })
        cy.url().should('include', 'toscrape.com')
        cy.log('Before Reload')
        cy.reload()
        cy.log('After Reload')
    })

    it('Should click on Travel category', () => {
        cy.get('a').contains('Travel').click()
        cy.get('h1').contains('Travel')
    })

    it('Should display correct number of books', () => {
        cy.get('.product_pod').its('length').should('eq', 11)
    })

    it('Should click on Poetry category', () => {
        cy.get('a').contains('Poetry').click()
    })

    it('Should click on Olio book details', () => {
        cy.get('a').contains('Olio').click()
    })

    it('Should click on Poetry category', () => {
        cy.get('.price_color').contains('£23.88')
    })

})












