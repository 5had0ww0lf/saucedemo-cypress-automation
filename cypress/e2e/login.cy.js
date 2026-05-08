import LoginPage from '../pages/LoginPage';
import { users } from '../fixtures/users';

describe('Login Tests', () => {
  
  beforeEach(() => {
    LoginPage.visit();
  });

  it('should login successfully with valid credentials', () => {
    LoginPage.login(users.valid.username, users.valid.password)

    //Validating if user is logged in
    cy.url()
      .should('include', '/inventory.html')
    cy.get('[data-test="shopping-cart-link"]')
      .should('be.visible')

    //Logout
    LoginPage.logout();

    //Validating if user is logged out
    cy.get('[data-test="login-button"]')
      .should('be.visible')
  })

  it('should show error message with invalid credentials', () => {
    LoginPage.login(users.invalid.username, users.invalid.password)

    //Validating if the expected error message appears
    LoginPage.errorMessage()
      .should('be.visible')
      .and('contain', 'Username and password do not match')

  })

  it('should show error message with locked out credentials', () => {
    LoginPage.login(users.lockedOut.username, users.lockedOut.password)

    //Validating if the expected error message appears
    LoginPage.errorMessage()
      .should('be.visible')
      .and('contain', 'this user has been locked out')

  })

})