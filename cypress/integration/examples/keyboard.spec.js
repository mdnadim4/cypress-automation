describe("Keyboard press simulation", () => {

    it("Should submit searchbox with pressing enter", () => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.get('#searchTerm').type('just some text {enter}')
    })

})