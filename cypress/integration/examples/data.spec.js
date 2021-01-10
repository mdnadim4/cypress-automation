describe('Write data in JSON or Text file', () => {

    it('Should write data in JSON file', () => {
        cy.writeFile('data.json', {name:'Nadim Mahmud', email: 'mdnadim4@gmail.com', age: 30})
    });

    it('Should write data in Text file', () => {
        cy.writeFile('data.txt', "lorem25Pariatur esse ipsum laborum sint.")
    });

    it('Should read and verify data from JSON file', () => {
        cy.readFile('data.json').its('age').should('eq', 30)
    });

    it('Should read and verify data from Text file', () => {
        cy.readFile('data.txt').should('eq', 'lorem25Pariatur esse ipsum laborum sint.')
    });

    it('Should read and verify browser document content', () => {
        cy.visit('http://example.com/')
        cy.document().its('contentType').should('eq', 'text/html')
        cy.document().its('characterSet').should('eq', 'UTF-8')
    });

})
