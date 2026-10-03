// cypress/e2e/login.cy.ts

import { loginPage } from '../pages/loginPage';
import { users } from '../support/users';

describe('Login Functionality - Saucedemo', () => {
  beforeEach(() => {
    loginPage.visit();
  });

  it('Should login successfully with valid credentials', () => {
    loginPage.loginWithUser(users.valid);
    cy.url().should('include', '/inventory.html');
  });

  it('Should display error message for locked out user', () => {
    loginPage.loginWithUser(users.lockedOut);
    loginPage.getErrorMessage().should('contain', 'Epic sadface: Sorry, this user has been locked out.');
  });
});