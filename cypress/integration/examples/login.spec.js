/// <reference types="Cypress" />

describe('Verify the login form', () => {

    it('Should load login page', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.title().should('include', 'Zero - Log in')
    })

    it('Should fill username', () => {
        cy.get('#user_login').as('username')
        cy.get('@username').clear()
        cy.get('@username').type('Some Invlid Name', { delay: 50 })
    })

    it('Should fill password', () => {
        cy.get('#user_password').as('password')
        cy.get('@password').clear()
        cy.get('@password').type('Some Invlid Name', { delay: 50 })
    })

    it('Should mark checkbox', () => {
        cy.get('input[type="checkbox"]').click()
        cy.wait(5000)
    })

    it('Should submit login form', () => {
        cy.contains('Sign in').click()
    })

    it('Should display error message', () => {
        cy.get('.alert-error').should('be.visible').and('contain', 'Login and/or password are wrong.')
    })
})