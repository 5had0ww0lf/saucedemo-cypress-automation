import { CheckoutDetails } from '../support/types';

export class CheckoutPage {
  private firstNameInput = '#first-name';
  private lastNameInput = '#last-name';
  private postalCodeInput = '#postal-code';
  private continueButton = '#continue';
  private finishButton = '#finish';
  private successHeader = '.complete-header';
  private errorMessage = '[data-test="error"]';
  private itemSubtotalLabel = '.summary_subtotal_label';
  private taxLabel = '.summary_tax_label';
  private totalLabel = '.summary_total_label';

  public fillInformation(details: Partial<CheckoutDetails>): void {
    if (details.firstName && details.firstName.trim() !== '') {
      cy.get(this.firstNameInput).type(details.firstName);
    }
    if (details.lastName && details.lastName.trim() !== '') {
      cy.get(this.lastNameInput).type(details.lastName);
    }
    if (details.postalCode && details.postalCode.trim() !== '') {
      cy.get(this.postalCodeInput).type(details.postalCode);
    }
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

  public getErrorMessage(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.errorMessage);
  }

  // Scrapes subtotal text (e.g. "Item total: $29.99") and parses numeric float value
  public getItemSubtotal(): Cypress.Chainable<number> {
    return cy.get(this.itemSubtotalLabel).invoke('text').then((text) => {
      return parseFloat(text.replace(/[^0-9.]/g, ''));
    });
  }
  
  // Scrapes tax text (e.g. "Tax: $2.40") and parses numeric float value
  public getTax(): Cypress.Chainable<number> {
    return cy.get(this.taxLabel).invoke('text').then((text) => {
      return parseFloat(text.replace(/[^0-9.]/g, ''));
    });
  }

  // Scrapes total text (e.g. "Total: $32.39") and parses numeric float value
  public getTotal(): Cypress.Chainable<number> {
    return cy.get(this.totalLabel).invoke('text').then((text) => {
      return parseFloat(text.replace(/[^0-9.]/g, ''));
    });
  }
}

export const checkoutPage = new CheckoutPage();