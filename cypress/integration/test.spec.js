describe('testing elements appear on the page', () => {
  it('test there is any input',() => {
    cy.visit('/')
    cy.get('input').should('exist')
  })

  it('testing a search box exists',()=>{
    cy.visit('/')
    cy.get('.Searchbox').then((el) => {
    Cypress.dom.isElement(el) // true
  })
  })

  it('testing a save button exists',()=>{
     cy.visit('/')
    cy.get('#save')
  })


});
