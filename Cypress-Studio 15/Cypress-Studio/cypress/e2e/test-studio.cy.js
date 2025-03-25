/// <reference types="Cypress" />

describe('Test con Studio Cypress', () => {

  beforeEach('Conexión a Institutoweb Login', () => {
    cy.visit('https://institutoweb.com.ar/test/login.html')
  })

  it('Test Login Usuario', () => {
    
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#tuusuario').type('Miusuario');
    cy.get('#tuclave').type('ClaveSecreta');
    cy.get('#tumail').type('info@institutoweb.com.ar');
    // click del botón ingresar
    cy.get(':nth-child(8)').click();
    // ingresamos en la segunda pantalla
    // Aserción del Título
    cy.get('h3').should('have.text', 'Acceso correcto!');
    cy.get('#volver').click();
    /* ==== End Cypress Studio ==== */
  })

})