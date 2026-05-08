import LoginPage from "../pages/loginPage";
import InventoryPage from "../pages/inventoryPage";
import CartPage from "../pages/cartPage";
import CheckoutPage from "../pages/checkoutPage";

import { users } from "../fixtures/users";

describe('Purchase E2E', () => {

  beforeEach(() => {
    LoginPage.visit()

    LoginPage.login(
      users.valid.username,
      users.valid.password
    )

  })

  it('should add product to the cart successfully', () => {
    
    InventoryPage.addProductToCart()

    InventoryPage.shoppingCartBadge()
      .should('be.visible')
      .and('have.text', '1')

    InventoryPage.openCart()

    CartPage.cartItem()
      .should('contain', 'Bolt T-Shirt')
  })

  it('should remove product from cart successfully', () => {
    
    InventoryPage.addProductToCart()

    InventoryPage.shoppingCartBadge()
      .should('be.visible')
      .and('have.text', '1')

    InventoryPage.openCart()

    CartPage.cartItem()
      .should('contain', 'Bolt T-Shirt')
 
    CartPage.removeItemFromCart()
  })

  it('should complete checkout successfully', () => {
    InventoryPage.addProductToCart()

    InventoryPage.openCart()

    CartPage.proceedToCheckout()

    CheckoutPage.completeCheckout(
      users.valid.checkoutInfo
    )  

    CheckoutPage.finishCheckout()

    //Validating if order was successful
    CheckoutPage.successMessage()
      .should('contain', 'Thank you for your order!')

    LoginPage.logout()

    //Validating if user is logged out
    cy.get('[data-test="login-button"]')
      .should('be.visible')

  })


})