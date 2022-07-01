import 'cypress-iframe';
require('cypress-xpath');

var URLa="";
describe('example to-do app', () => {
   
  it('Should vist iframe!', () => {

    cy.visit('index.html')
    cy.frameLoaded('#iframe_a');
    cy.iframe('#iframe_a').find('#A2').should('be.visible').click();
    // cy.wait(3000)    
    // cy.frameLoaded('#iframe_b');
//    cy.iframe('#iframe_b').its('0.contentDocument.body').then(cy.wrap).find('#sb_form_q').should('be.visible').type('Hello, World')
   
  })
  it('iframe 2 contents check', () => {    
    cy.iframe('#iframe_b').find('#sb_form_q').should('be.visible').type('Hello, World')  
    cy.iframe('#iframe_b').find('#search_icon').should('be.visible').click();
  })
  it('iframe Multi tabs issue', () => {    
    cy.iframe('#iframe_a').find('#A1').should('be.visible')
    cy.iframe('#iframe_a')
    .find('#A1')
    .invoke('removeAttr', 'target').click();
    cy.go('back');
  })
});