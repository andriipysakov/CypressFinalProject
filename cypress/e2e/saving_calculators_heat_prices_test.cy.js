/// <reference types = "Cypress"/>

import { data } from "../fixtures/current_heating_system.json"

const heattype = '[id="heattype"]'
const heatsum = '[id="CHC"]'

describe('heat prices tests', { defaultCommandTimeout: 10000 }, () => {

  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
  
  beforeEach(() => {
    cy.viewport(1400, 947)
    cy.visit('savings-calculator')
  })

  it('verify that choosing each Current Heating type test', () => {
    cy.populateDataStep1()
    cy.get(heattype).should('be.visible')
    // cy.get(heattype).invoke('text').should('contain', 'Current Heater')
    cy.get(heatsum).invoke('text').should('eq', '$0.00')
    data.forEach(element => {
      cy.get(heattype).should('be.visible')
      cy.get(heatsum).should('be.visible')
      cy.get(heattype).select(element.heatsystem, {force: true}).invoke('text').should('contain', element.heatsystem)
      // cy.get(heatsum).should('eq', element.heatcost)
    })
  })

})
