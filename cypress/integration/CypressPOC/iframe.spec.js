import 'cypress-iframe';
require('cypress-xpath');

var URLa="";
describe('example to-do app', () => {
   
  it('Should vist iframe!', () => {

    cy.visit('index.html')
    cy.frameLoaded('#iframe_a');
    cy.iframe('#iframe_a').find('#A2').should('be.visible').click();
  })
  it('iframe 2 contents check', () => {    
    cy.iframe('#iframe_b').find('#sb_form_q').should('be.visible').type('Hello, World')  
    cy.iframe('#iframe_b').find('#search_icon').should('be.visible').click();
  })
  it('iframe Multi tabs issue', () => {    
    cy.iframe('#iframe_a').find('#A1').should('be.visible')
    cy.iframe('#iframe_a').find('#A1').should('be.visible').each(($el) => {
      const herf = $el.attr('href');
      URLa=herf;
      cy.log(URLa);
      cy.log(herf);
      cy.iframe('#iframe_b').invoke('attr', 'src', herf)      
      cy.frameLoaded('#iframe_b');
      })
  })
  it('iframe Multi tabs issue1', () => {
    cy.pause();
    cy.visit(URLa);
    cy.log(URLa);
  })
});