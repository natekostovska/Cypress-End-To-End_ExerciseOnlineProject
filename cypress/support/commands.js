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

//Dont create custom commands for everything it is a bad practise 
Cypress.Commands.add('submitForm', () => {
    cy.get('form button[type="submit"]').click();
  });

Cypress.Commands.addQuery('getById',(id)=>{
    const getFn = cy.now('get', `[data-cy="${id}"]`);
    return() =>{
        return getFn();
    }
})

// the below code snippet is required to handle a React hydration bug that would cause tests to fail
// it's only a workaround until this React behavior / bug is fixed
Cypress.on('uncaught:exception', (err) => {
    // we check if the error is
    if (
      err.message.includes('Minified React error #418;') ||
      err.message.includes('Minified React error #423;') ||
      err.message.includes('hydrating') ||
      err.message.includes('Hydration')
    ) {
      return false;
    }
  });

  
Cypress.Commands.add('login', () => {
  cy.visit('http://localhost:3000/login');
  cy.get('[data-cy="auth-email"]').click();
  cy.get('[data-cy="auth-email"]').type('test@example.com');
  cy.get('[data-cy="auth-password"]').type('testpassword');
  cy.get('[data-cy="auth-submit"]').click();
  cy.location('pathname').should('eq', '/takeaways');
  cy.getCookie('__session').its('value').should('not.be.empty');
});