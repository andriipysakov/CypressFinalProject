/// <reference types = "Cypress"/>

import { data } from "../fixtures/current_heating_system.json"

const heattype = '[id="heattype"]'
const heatsum = '[id="CHC"]'

describe('heat prices tests', { defaultCommandTimeout: 10000 }, () => {

  beforeEach(() => {
    cy.viewport(1400, 947)
    cy.visit('savings-calculator')
  })

  it('verify that choosing each Current Heating type test', () => {
    cy.populateDataStep1()
    cy.get(heattype).should('be.visible')
    cy.get(heattype).invoke('text').should('contain', 'Current Heater')
    data.forEach(element => {
      cy.get(heattype).should('be.visible')
      cy.get(heatsum).should('be.visible')
      cy.get(heattype).select(element.heatsystem).invoke('text').should('contain', element.heatsystem)
      cy.get(heatsum).should('eq', element.heatcost)
    })
  })

})
