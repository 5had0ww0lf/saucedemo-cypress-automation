import { CheckoutDetails } from '../support/types';

export class CheckoutPage {
  private firstNameInput = '#first-name';
  private lastNameInput = '#last-name';
  private postalCodeInput = '#postal-code';
  private continueButton = '#continue';
  private finishButton = '#finish';
  private successHeader = '.complete-header';

  public fillInformation(details: CheckoutDetails): void {
    cy.get(this.firstNameInput).type(details.firstName);
    cy.get(this.lastNameInput).type(details.lastName);
    cy.get(this.postalCodeInput).type(details.postalCode);
  }

  public clickContinue(): void {
    cy.get(this.continueButton).click();
  }

  public clickFinish(): void {
    cy.get(this.finishButton).click();
  }

  public getSuccessMessage(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.successHeader);
  }
}

export const checkoutPage = new CheckoutPage();