describe('Login and Logout functionality testing', () => {
    
    before(function() {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', 'index.html')
        cy.get('#signin_button').click()
    })
    
    it('Should try to login with invalid data', () => {
        cy.get('form').should('be.visible')
        //Login via custom commands
        cy.login('invalid name', 'invalid email')
        // cy.get('#user_login').type('invalid name')
        // cy.get('#user_password').type('invalid email')
        // cy.get('#user_remember_me').click()
        // cy.contains('Sign in').click()
    });

    it('Should display error message', () => {
        cy.get('.alert-error').should('be.visible').and('contain', 'Login and/or password are wrong.')
    });

    it('Should try to login with valid data', () => {
        cy.fixture('user').then(user => {
            const username = user.username
            const password = user.password
            //Login via custom commands
            cy.login(username, password)
            // cy.get('#user_login').type(username)
            // cy.get('#user_password').type(password)
            // cy.get('#user_remember_me').click()
            // cy.contains('Sign in').click()
        })

        cy.get('ul.nav-tabs').should('be.visible')
        cy.url().should('include', 'bank/account-summary.html')
    });

    it('Should logout from application', () => {
        cy.contains('username').click()
        cy.get('#logout_link').click()
        cy.url().should('include', 'index.html')
    });

})
