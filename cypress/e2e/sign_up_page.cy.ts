/* eslint-disable sonarjs/no-duplicate-string */

describe('Sign Up Page', () => {
  describe('When user is not authenticated', () => {
    beforeEach(() => {
      cy.visit('/sign-up');
    });

    it('successfully loads without redirection', () => {
      cy.url().should('include', '/sign-up');
    });

    it('shows the form correctly', () => {
      cy.get('#sign-up-form').should('exist');
      cy.get('#sign-up-form').find('input[name="firstName"]').should('exist');
      cy.get('#sign-up-form').find('input[name="lastName"]').should('exist');
      cy.get('#sign-up-form').find('input[name="email"]').should('exist');
      cy.get('#sign-up-form').find('input[name="password"]').should('exist');
      cy.get('#sign-up-form').find('button[type="submit"]').should('exist');
    });

    it('goes to sign in page when user clicks on sign in link', () => {
      cy.get('#sign-up-form-footer').find('a').click();
      cy.url().should('include', '/sign-in');
    });
  });
});
