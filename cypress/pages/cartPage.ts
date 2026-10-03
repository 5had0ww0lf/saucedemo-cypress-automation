export class CartPage {
  private checkoutButton = '#checkout';
  private continueShoppingButton = '#continue-shopping';
  private cartItemName = '.inventory_item_name';
  private cartItemPrice = '.inventory_item_price';
  private removeButtonPrefix = '[data-test^="remove-"]';

  public clickCheckout(): void {
    cy.get(this.checkoutButton).click();
  }

  public clickContinueShopping(): void {
    cy.get(this.continueShoppingButton).click();
  }

  public getCartItemName(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.cartItemName);
  }

  public getCartItemPrice(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.cartItemPrice);
  }

  public removeItemFromCart(): void {
    cy.get(this.removeButtonPrefix).first().click();
  }
}

export const cartPage = new CartPage();