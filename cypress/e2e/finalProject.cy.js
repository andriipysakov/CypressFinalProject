/// <reference types = "Cypress"/>

describe('Cypress Final Project', () => {

  it('sanity UI tests', () => {
    cy.visit('/')
    cy.url().should('eq', 'https://consumersenergymanagement.ca/')
  })

})
