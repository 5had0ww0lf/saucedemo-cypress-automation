export class InventoryPage {
  private inventoryContainer = '#inventory_container';
  private shoppingCartBadge = '.shopping_cart_badge';
  private shoppingCartLink = '.shopping_cart_link';
  private addToCartBackpackBtn = '[data-test="add-to-cart-sauce-labs-backpack"]';
  private addToCartBikeLightBtn = '[data-test="add-to-cart-sauce-labs-bike-light"]';
  private addToCartBoltTShirtBtn = '[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]';
  private removeBackpackBtn = '[data-test="remove-sauce-labs-backpack"]';
  private itemPrices = '.inventory_item_price';
  private productSortDropdown = '[data-test="product-sort-container"]';
  private openMenu = '#react-burger-menu-btn';
  private logoutLink = '#logout_sidebar_link';

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

public addBoltTShirtToCart(): void {
    cy.get(this.addToCartBoltTShirtBtn).click();
  }

  public removeBackpackFromCart(): void {
    cy.get(this.removeBackpackBtn).click();
  }

  public getItemPrices(): Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get(this.itemPrices);
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

  public logout(): void {
    cy.get(this.openMenu).click();
    cy.get(this.logoutLink).click();
  }

}

export const inventoryPage = new InventoryPage();