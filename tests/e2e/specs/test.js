// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/');
    cy.url().should('include', '/search');
  });
  it('visit the my-list', () => {
    cy.visit('/#/my-list');
  });
  it('search webpack repositoryes', () => {
    cy.visit('/#/search');
    cy.get('button[type="submit"]').click();
    cy.get('.searchFrom__keywords span').should('have.class', 'invalid');

    cy.get('.searchFrom__keywords input').type('Webpack');
    cy.get('.searchFrom__keywords span').should('have.not.class', 'invalid');

    cy.get('button[type="submit"]').click();

    cy.get('.repository');
  });

  it('save repository', () => {
    cy.get('.viewFilter__tile').click();
  });
});
