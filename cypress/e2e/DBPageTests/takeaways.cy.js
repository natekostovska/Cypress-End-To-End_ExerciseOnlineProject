/// <reference types="Cypress" />

describe('Takeaways', () => {
  beforeEach(() => {
    cy.task('seedDatabase');
  });

  it('should display a list of fetched takeaways', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-cy="takeaway-item"]').should('have.length', 2);
  });

  it('should add a new takeaway', () => {
    cy.intercept('POST', '/takeaways/new*', 'success').as('createTakeaway');
    cy.login();
    cy.visit('http://localhost:3000/takeaways/new');
    cy.get('[data-cy="title"]').click();
    cy.get('[data-cy="title"]').type('TestTitle1');
    cy.get('[data-cy="body"]').type('TestBody1');
    cy.get('[data-cy="create-takeaway"]').click();
    cy.wait('@createTakeaway')
      .its('request.body')
      .should('match', /TestTitle1.*TestBody1/);
  });
});