describe('working in iFrames', function () {

//#region verify

    // it('opens the about page', () => {
    //     cy.visit('index.html')
    //     cy.wait(7000)
    //     cy.get('#iframe_a').its('0.contentDocument.body').find('#A2')
    //     .should('have.attr', 'href')
    //     .then((href) => {
    //         cy.visit(href);
    
    //         cy.wait(4000);
    //     })
    // })
    //if we use above cy.vist (href) fetching iframes is a blocker 
    //if we are visiting 2 urls in same block which of different origins again causes issue

    // it('replaces', () => {
    //     cy.on('window:before:load', (win) => {
    //       win.__location = {
    //         replace: cy.stub().as('replace')
    //       }
    //     })
      
    //     cy.intercept('GET', 'index.html', (req) => {
    //       req.continue(res => {
    //         res.body = res.body.replaceAll(
    //           'window.location.replace', 'window.__location.replace')
    //       })
    //     }).as('index')
    //     cy.visit('index.html')
    //     cy.wait('@index')
    //     cy.wait(4000);
    //     cy.contains('h1', 'test')
    //     cy.get('#iframe_a').its('0.contentDocument.body').find('#A2')
    //     .should('have.attr', 'href')
    //     .then((href) => {
    //     cy.get('@replace').should('have.been.calledOnceWith', href)
    //     cy.wait(4000);
    //     cy.visit('index.html')
    //     cy.wait(4000)
    //     })
    //   })
    //replace is not calling properly are missing steps how to use
//#endregion verify
      it('method W3Schools', function () {
        //cy.visit('https://Google.co.in')
        cy.visit('index.html')
        cy.wait(4000)
        //getIframeBody().find('#A2').invoke('removeAttr', 'target').click()
        getIframeBody().find('#A2').should('have.attr', 'target', '_blank') // check target attr has _blank
        .invoke('attr', 'target', '_self')
        .click()
        cy.wait(4000)
        getIframeBody().find('#search2').type('cypress')
        getIframeBody().find('#listofsearchresults a').click()
        cy.wait(5000)
        cy.visit('index.html')
        cy.wait(4000)
    })
    it('method login',function() {
        // cy.wait(7000);
        // cy.visit('index.html');
        // cy.wait(7000);
        getIframeBody().find('#alogin').click();
        cy.wait(1000)
        getIframeBody2().find('input[name="username"]').type('test')
        getIframeBody2().find('input[name="password"]').type('test')
        getIframeBody2().find('button[type="submit"]').click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Login Successfull')
        })
        getIframeBody2().find('.alert').should('exist')  
        getIframeBody2().find('.closebtn').click();
        cy.wait(7000);
})

it('method Search Bing', function () {
    cy.wait(7000);
    getIframeBody().find('#A1').click();
    cy.wait(4000)        
    getIframeBody2().find('#sb_form_q').type('cypress automation{enter}')
    cy.wait(5000)        
    getIframeBody2().find('#b-scopeListItem-images a').click()
})

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
})