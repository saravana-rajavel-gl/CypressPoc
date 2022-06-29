import 'cypress-iframe';
var URLa="";
describe('example to-do app', () => {
   
  it.only('Should vist iframe!', () => {

    cy.visit('index.html')
    cy.frameLoaded('#iframe_a');
    cy.iframe('#iframe_a').find('#A2').should('be.visible').click();
    cy.wait(3000)    
    cy.frameLoaded('#iframe_b');
    //cy.pause()
    cy.iframe('#iframe_b').find('#sb_form_q').should('be.visible').type('Hello, World');;
     cy.iframe('#iframe_a').find('#A2').then((val)=>{
      URLa= val.prop('href')
      cy.log(URLa)
  //    Cypress.Commands.add('forceVisit', url => {
  //     cy.window().then(win => {
  //         return win.open(URLa, '_self'); 
  //       });
  });
  //     cy.visit(URLa)
  //     cy.find('#sb_form_q').should('be.visible').type('Hello, World');
    // })

  })
    it('Should vist iframe!', () => {
    //  cy.visit(URLa)
      //cy.find('#sb_form_q').should('be.visible').type('Hello, World');
      //cy.visit('index.html')    
      cy.wait(3000)    
      cy.frameLoaded('#iframe_b');
    //cy.pause()
    cy.iframe('#iframe_b').find('#sb_form_q').should('be.visible').type('Hello, World');;
     
    
})
  });
  //it('New tab',()=>{
    //cy.get('div.footer-nav > ul > li:nth-child(2) > a')
    //.should('have.attr', 'href').and('include', 'contact')
    //.then((href) => {
     // cy.visit(href)
    //})

  //})

  //getIframeBody().find('#A2').should('have.text', 'Search Tool').click()
    // var getIframeBody1 = () => {
    //   // get the iframe > document > body
    //   // and retry until the body element is not empty
    //   return cy
    //   .get('iframe[name="iframe_b"]')
    //   .its('0.contentDocument.body').should('not.be.empty')
    //   // wraps "body" DOM element to allow
    //   // chaining more Cypress commands, like ".find(...)"
    //   // https://on.cypress.io/wrap
    //   .then(cy.wrap);
      
    // }
    // getIframeBody1().find('title').should('have.text', 'Bing');  
