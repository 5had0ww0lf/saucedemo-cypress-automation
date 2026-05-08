class InventoryPage {

  addProductToCart() {
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
  }
  
  shoppingCartBadge() {
    return cy.get('[data-test="shopping-cart-badge"]')
  }

  openCart() {
    cy.get('[data-test="shopping-cart-link"]').click()
  }

}

export default new InventoryPage()