/// <reference types = "Cypress"/>

import { data } from '../fixtures/menu_options.json';

describe('sanity tests main page', { defaultCommandTimeout: 10000 }, () => {

  const main_page_verification = '[class="about-lrt"]'

  beforeEach(() => {
    cy.viewport(1400, 947)
    cy.visit('/')
  })

  it('navigate to the main page', () => {
    cy.url().should('eq', 'https://consumersenergymanagement.ca/')
    cy.get(main_page_verification).contains('Energy').should('be.visible')
  })

  it('navigate to menu pages by fixtures', () => {
    data.forEach(element => {
      cy.get(element.title_menu).should('be.visible')
      cy.get(element.title_menu).click()
      cy.url().should('eq', element.url)
      cy.get('h1').contains(element.contain).should('be.visible')
      cy.screenshot(element.contain)
    })
  })


})


