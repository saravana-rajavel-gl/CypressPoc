require('cypress-iframe');
const getIframeBody = () => {
  // get the iframe > document > body
  // and retry until the body element is not empty
  return cy
  .get('iframe[name="iframe_a"]')
  .its('0.contentDocument.body').should('not.be.empty')
  // wraps "body" DOM element to allow
  // chaining more Cypress commands, like ".find(...)"
  // https://on.cypress.io/wrap
  .then(cy.wrap)
}
describe('example to-do app', () => {
   
  it('Should vist!', () => {
    cy.visit('index.html')
    getIframeBody().find('#A2').should('have.text', 'Search Tool').click()
    var value=getIframeBody().find('#A1').should('have.attr', 'href');
    console.log(value);
    // .then((href) => {
      // cy.visit(href)
    // })
  });
});
