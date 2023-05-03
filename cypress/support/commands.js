// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('populateDataStep1', () => {
    cy.get('[name="nastates"]').select('Ontario').invoke('val').should('eq', 'Ontario')
    cy.get('[name="stage2"]').select('Toronto').invoke('text').should('contain', 'Toronto')
    cy.get('[name="stories"]').select('2').invoke('val').should('eq', '2')
    cy.get('[name="squarefeet"]').select('2000').invoke('val').should('eq', '2000')
    cy.get('[name="houseage"]').type('15').invoke('val').should('eq', '15')
})