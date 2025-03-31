/// <reference types="Cypress" />
//import "cypress-real-events";
describe('template spec', () => {
  beforeEach('passes', () => {
    cy.visit('https://www.saucedemo.com')
    //cy.viewport(1100,900)
  })

  it('passes', () => {
   cy.get('[data-test="username"]').type('standard_user')
   cy.get('[data-test="password"]').type('secret_sauce')	
   cy.get('[data-test="login-button"]').click()	
   cy.get('#react-burger-menu-btn').click()	
   //cy.screenshot('imagen')
   cy.get('[data-test="logout-sidebar-link"]').click()	
   cy.get('#root > div > div.login_logo').should('have.text','Swag Labs') //aserción
   // este comando llama a el logout y a una aserción sobre el título encontrado en la web de respuesta

  })
})