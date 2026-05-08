class CartPage {

  cartItem() {
    return cy.get('[data-test="inventory-item-name"]')
  }

  removeItemFromCart () {
    cy.get('[data-test="remove-sauce-labs-bolt-t-shirt"]').click()
    cy.get('[data-test="remove-sauce-labs-bolt-t-shirt"]')
      .should('not.exist')
  }

  proceedToCheckout() {
    cy.get('[data-test="checkout"]').click()

  }

}export default new CartPage()