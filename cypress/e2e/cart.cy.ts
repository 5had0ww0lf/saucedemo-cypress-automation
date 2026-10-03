import { loginPage } from '../pages/loginPage';
import { inventoryPage } from '../pages/inventoryPage';
import { cartPage } from '../pages/cartPage';
import { users } from '../support/users';

describe('Cart Functionality - Saucedemo', () => {
  beforeEach(() => {
    loginPage.visit();
    loginPage.loginWithUser(users.valid);
    inventoryPage.verifyIsOnInventoryPage();
  });

  it('Should remove an item from inside the cart page', () => {
    inventoryPage.addBackpackToCart();
    inventoryPage.goToCart();

    // Verifies the item is in the cart before removal
    cartPage.getCartItemName().should('contain', 'Sauce Labs Backpack');

    // Removes the item from inside the cart
    cartPage.removeItem();

    // Validates that no cart items exist in the DOM
    cartPage.getCartItems().should('not.exist');
  });

  it('Should navigate back to the inventory page when clicking "Continue Shopping"', () => {
    inventoryPage.goToCart();

    // Clicks the "Continue Shopping" button inside the cart
    cartPage.clickContinueShopping();

    // Validates user is redirected back to the inventory page
    inventoryPage.verifyIsOnInventoryPage();
  });
});