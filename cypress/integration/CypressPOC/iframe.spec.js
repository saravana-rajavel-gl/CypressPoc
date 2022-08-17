import 'cypress-iframe'

describe('working in iFrames', function () {
    it('method', function () {
        cy.visit('index.html')
        cy.wait(2000)
        getIframeBody().find('#A2').invoke('removeAttr', 'target').click()
        cy.wait(2000)
        getIframeBody().find('#search2').type('cypress')
        getIframeBody().find('#listofsearchresults a').click()
    })

    it('method', function () {
        cy.visit('index.html')
        cy.wait(2000)
        //getIframeBody().find('#A1').invoke('removeAttr', 'target').click()
        getIframeBody().find('#A1').click();
        cy.wait(2000)
        getIframeBody2().find('#sb_form_q').type('cypress')
        getIframeBody2().find('#sa_ul li').eq(1).click()
    })

    const getIframeDocument = () => {
        return cy
            //.get('iframe[data-cy="the-frame"]')
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
            //.get('iframe[data-cy="the-frame"]')
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