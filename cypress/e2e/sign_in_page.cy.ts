/* eslint-disable sonarjs/no-duplicate-string */

describe('Sign In Page', () => {
  describe('When user is not authenticated', () => {
    beforeEach(() => {
      cy.visit('/sign-in');
    });

    it('loads without redirection', () => {
      cy.url().should('include', '/sign-in');
    });

    it('shows the form correctly', () => {
      cy.get('#sign-in-form').should('exist');
      cy.get('#sign-in-form').find('input[name="email"]').should('exist');
      cy.get('#sign-in-form').find('input[name="password"]').should('exist');
      cy.get('#sign-in-form').find('button[type="submit"]').should('exist');
    });

    it('goes to sign up page when user clicks on sign up link', () => {
      cy.get('#sign-in-form-footer').find('a').click();
      cy.url().should('include', '/sign-up');
    });
  });
});
