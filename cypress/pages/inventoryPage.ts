export class InventoryPage {
  private inventoryContainer = '#inventory_container';
  private shoppingCartBadge = '.shopping_cart_badge';
  private shoppingCartLink = '.shopping_cart_link';
  private addToCartBackpackBtn = '[data-test="add-to-cart-sauce-labs-backpack"]';
  private addToCartBikeLightBtn = '[data-test="add-to-cart-sauce-labs-bike-light"]';
  private productSortDropdown = '[data-test="product-sort-container"]';

  public verifyIsOnInventoryPage(): void {
    cy.url().should('include', '/inventory.html');
    cy.get(this.inventoryContainer).should('be.visible');
  }

  public addBackpackToCart(): void {
    cy.get(this.addToCartBackpackBtn).click();
  }

  public addBikeLightToCart(): void {
    cy.get(this.addToCartBikeLightBtn).click();
  }

  public goToCart(): void {
    cy.get(this.shoppingCartLink).click();
  }

  public getCartBadgeCount(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.shoppingCartBadge);
  }

  public sortProductsBy(optionValue: string): void {
    cy.get(this.productSortDropdown).select(optionValue);
  }
}

export const inventoryPage = new InventoryPage();