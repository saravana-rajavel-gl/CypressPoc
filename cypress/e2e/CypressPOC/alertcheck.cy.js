describe('Example to demonstrate handling of JavaScript Alerts, Confirm, Prompt in Cypress', () => {

    beforeEach(() => {
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
    })

    it('Handling JS Alert - Validate Alert Text and Click OK', () => {
        cy.contains('Click for JS Alert').click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal('I am a JS Alert')
        })
        cy.on('window:confirm', () => true);
        cy.get('#result').should('have.text', 'You successfully clicked an alert')
    })
})