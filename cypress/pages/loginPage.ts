import { UserCredentials } from '../support/types';

export class LoginPage {
  private usernameInput = '#user-name';
  private passwordInput = '#password';
  private loginButton = '#login-button';
  private errorMessage = '[data-test="error"]';

  public visit(): void {
    cy.visit('/');
  }

  public fillUsername(username: string): void {
    cy.get(this.usernameInput).type(username);
  }

  public fillPassword(password: string): void {
    cy.get(this.passwordInput).type(password);
  }

  public clickLogin(): void {
    cy.get(this.loginButton).click();
  }

  public loginWithUser(user: UserCredentials): void {
    this.fillUsername(user.username);
    this.fillPassword(user.password);
    this.clickLogin();
  }

  public getErrorMessage(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.errorMessage);
  }
}

export const loginPage = new LoginPage();