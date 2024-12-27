
describe('tasks page', () => {

  beforeEach(() => {
    // Runs before every test (i.e., it's repeated)
    cy.visit('/'); // http://localhost:5173/
    // Seeding a database
  });

  it('should render the main image', () => {
    cy.get('.main-header').find('img');
    // cy.get('.main-header img'); 
  });

  it('should display the page title', () => {
    cy.get('h1').should('have.length', 4);
    cy.get('h1').contains('My Cypress Course Tasks');
    // cy.contains('My Cypress Course Tasks');
  });
});

