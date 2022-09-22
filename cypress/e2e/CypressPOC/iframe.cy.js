import 'cypress-iframe'
import { get } from 'cypress/types/lodash'

describe('working in iFrames', function () {
    it('method W3Schools', function () {
        cy.visit('index.html')
        cy.wait(2000)
        getIframeBody().find('#A2').invoke('removeAttr', 'target').click()
        cy.wait(2000)
        getIframeBody().find('#search2').type('cypress')
        getIframeBody().find('#listofsearchresults a').click()
        cy.wait(2000)
        cy.visit('index.html')
        cy.wait(2000)
})
    it('method login',function() {        
        getIframeBody().find('#alogin').click();
        cy.wait(1000)
        getIframeBody2().find('input[name="username"]').type('test')
        getIframeBody2().find('input[name="password"]').type('test')
        getIframeBody2().find('button[type="submit"]').click()
})

    it('method Search Bing', function () {
        getIframeBody().find('#A1').click();
        cy.wait(1000)        
        getIframeBody2().find('#sb_form_q').type('cypress automation{enter}')
        cy.wait(5000)        
        getIframeBody2().find('a[href="https://www.tutorialspoint.com/cypress-test-automation"]').click()
})

    const getIframeDocument = () => {
        return cy
            .get('#iframe_a')
            .its('0.contentDocument').should('exist')
    }

    const getIframeBody = () => {
        // get the document
        return getIframeDocument()
            // automatically retries until body is loaded
            .its('body').should('not.be.undefined')
            .then(cy.wrap)
    }

    const getIframeDocument2 = () => {
        return cy
            .get('#iframe_b')
            .its('0.contentDocument').should('exist')
    }

    const getIframeBody2 = () => {
        // get the document
        return getIframeDocument2()
            // automatically retries until body is loaded
            .its('body').should('not.be.undefined')
            .then(cy.wrap)
    }
})