
Cypress.Commands.add('escribir', (selector, texto) => {   
    cy.get(selector).type(texto); 
    //cy.wait(5000)  
 })

