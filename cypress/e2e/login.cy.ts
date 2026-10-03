import { users } from '../support/users';
import { loginPage } from '../pages/loginPage';
import { inventoryPage } from '../pages/inventoryPage'

describe('Login Functionality - Saucedemo', () => {
  beforeEach(() => {
    loginPage.visit();
  });

  it('Should login successfully with valid credentials', () => {
    loginPage.loginWithUser(users.valid);
    cy.url().should('include', '/inventory.html');
    inventoryPage.verifyIsOnInventoryPage()
  });

  it('Should display error message for locked out user', () => {
    loginPage.loginWithUser(users.lockedOut);
    loginPage.getErrorMessage().should('contain', 'Epic sadface: Sorry, this user has been locked out.');
  });

  it('Should display error message for invalid credentials', () => {
    loginPage.loginWithUser(users.invalid);
    loginPage.getErrorMessage().should('contain', 'Epic sadface: Username and password do not match any user in this service');
  });  

  it('Should display error message for logim without username', () => {
    loginPage.loginWithUser(users.missingUsername);
    loginPage.getErrorMessage().should('contain', 'Epic sadface: Username is required');
  });

  it('Should display error message for login without password', () => {
    loginPage.loginWithUser(users.missingPassword);
    loginPage.getErrorMessage().should('contain', 'Epic sadface: Password is required');
  });

  it('Should login and logout successfully', () => {
    loginPage.loginWithUser(users.valid);
    cy.url().should('include', '/inventory.html');
    inventoryPage.verifyIsOnInventoryPage()
    inventoryPage.logout()
  });  

});