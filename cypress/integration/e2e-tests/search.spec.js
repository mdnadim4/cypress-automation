/// <reference types="Cypress" />

describe('Searchbox functionality testing', () => {
    before(function() {
        cy.visit('http://zero.webappsecurity.com/')
    })
    
    it('Should type in searchbox and submit via enter', () => {
        cy.get('#searchTerm').type('write something {enter}')
    })

    it('Should display the search result page', () => {
        cy.get('h2').contains('Search Results:').should('be.visible')
    });
})
