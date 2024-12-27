
// can set settings on suite or test level not just on global level in the cypress.config.js file
describe('contact form', () => {  //describe('contact form', {time}, () =>

  before(() => {
    // Runs only once, before all tests
  });
  beforeEach(() => {
    // Runs before every test (i.e., it's repeated)
    cy.visit('/about'); // http://localhost:5173/about
    // Seeding a database
  });
  afterEach(() => {
    // Runs after every test
  });
  after(() => {
    // Runs after all tests (i.e., only once)
  });


  it('should submit the form',() => { //it('should submit the form', {defaultCommandTimeout: 10000}, {browser: 'firefox'}() => {
   // storing data in a file, preparing DB, registering in cypress.config.js
    cy.task('seedDatabase', 'filename.csv').then(returnValue => {
      // ... use returnValue
    });
    cy.getById('contact-input-message').type('Hello world!');
    cy.getById('contact-input-name').type('John Doe');
    cy.getById('contact-btn-submit').contains('Send Message');
    //cy.get('[data-cy="contact-input-message"]').type('Hello world!');
   // cy.get('[data-cy="contact-input-name"]').type('John Doe');
   // cy.get('[data-cy="contact-btn-submit"]').contains('Send Message');
  //  cy.get('[data-cy="contact-btn-submit"]').then((el)=>{
      cy.getById('contact-btn-submit').then((el)=>{
      expect(el.attr('disabled')).to.be.undefined
      expect(el.text()).to.equal('Send Message')
    })
    cy.screenshot(); // we can add this method to take screenshot in the application
     //  cy.get('[data-cy="contact-input-email"]').type('test@example.com{enter}');
    cy.get('[data-cy="contact-input-email"]').type('test@example.com');
    cy.submitForm()
    //cy.get('[data-cy="contact-btn-submit"]').should('not.have.attr', 'disabled');
    cy.screenshot(); // we can add this method to take screenshot in the application
    cy.get('[data-cy="contact-btn-submit"]').as('submitBtn');
    // cy.get('@submitBtn').click();
    cy.get('@submitBtn').contains('Sending...');
    cy.get('@submitBtn').should('have.attr', 'disabled');
  });

  it('should validate the form input', () => {
    cy.submitForm()
    cy.get('[data-cy="contact-btn-submit"]').then((el) => {
      expect(el).to.not.have.attr('disabled');
      expect(el.text()).to.not.equal('Sending...');
    });
    cy.get('[data-cy="contact-btn-submit"]').contains('Send Message');
    cy.get('[data-cy="contact-input-message"]').as('msgInput');
    cy.get('@msgInput').focus().blur();
    cy.get('@msgInput')
      .parent()
      .should((el) => {
        expect(el.attr('class')).not.to.be.undefined;
        expect(el.attr('class')).contains('invalid');
      })
     // .should('have.attr','class').and('match',/invalid/)
     /* .then((el) => {
        expect(el.attr('class')).to.contains('invalid'); })*/
     

    cy.get('[data-cy="contact-input-name"]').focus().blur();
    cy.get('[data-cy="contact-input-name"]')
    .parent()
    .should((el) => {
      expect(el.attr('class')).not.to.be.undefined;
      expect(el.attr('class')).contains('invalid');
    })
    //.should('have.attr','class').and('match',/invalid/)
     /* .then((el) => {
        expect(el.attr('class')).to.contains('invalid'); })*/
      

    cy.get('[data-cy="contact-input-email"]').focus().blur();
    cy.get('[data-cy="contact-input-email"]')
    .parent()
    .should((el) => {
      expect(el.attr('class')).not.to.be.undefined;
      expect(el.attr('class')).contains('invalid');
    })
   // .should('have.attr','class').and('match',/invalid/)
     /* .then((el) => {
        expect(el.attr('class')).to.contains('invalid'); })*/
    })
});
