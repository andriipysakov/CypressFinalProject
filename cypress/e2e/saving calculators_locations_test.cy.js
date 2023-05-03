/// <reference types = "Cypress"/>

import { data } from '../fixtures/states_list.json';

const states = '[name="nastates"]'
const cities = '[name="stage2"]'


describe('saving calculator tests', { defaultCommandTimeout: 10000 }, () => {

    beforeEach(() => {
    cy.viewport(1400, 947)
    cy.visit('savings-calculator')
  })

  it('navigate to the saving calculator page', () => {
    cy.url().should('eq', 'https://consumersenergymanagement.ca/savings-calculator/')
    cy.get('h1').should('be.visible')
    cy.get('h1').should('have.text', 'Savings Calculator')
  })

  it('select states by fixtures', () => {
    data.forEach(element => {
      cy.get(states).should('be.visible')
      cy.get(cities).should('be.visible')
      cy.get(states).select(element.state).invoke('val').should('eq', element.state)
      cy.get(cities).select(element.city).invoke('text').should('contain', element.city)
    })
  })

})
