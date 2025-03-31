Cypress.Commands.add('miclick', (selector) => {   

    //cy.wait(500) 
    cy.get(selector).click(); 
 
 })