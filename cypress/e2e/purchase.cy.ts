import { loginPage } from '../pages/loginPage';
import { inventoryPage } from '../pages/inventoryPage';
import { cartPage } from '../pages/cartPage';
import { checkoutPage } from '../pages/checkoutPage';
import { users } from '../support/users';

describe('Purchase Flow - Saucedemo', () => {
  beforeEach(() => {
    loginPage.visit();
    loginPage.loginWithUser(users.valid);
  });

  it('Should complete a successful product purchase', () => {
    // 1. Add product to cart
    inventoryPage.addBackpackToCart();
    inventoryPage.goToCart();

    // 2. Validate product inside cart and proceed to checkout
    cartPage.getCartItemName().should('contain', 'Sauce Labs Backpack');
    cartPage.clickCheckout();

    // 3. Fill checkout form
    if (users.valid.checkoutInfo) {
      checkoutPage.fillInformation(users.valid.checkoutInfo);
    }
    checkoutPage.clickContinue();

    // 4. Finish purchase and validate success message
    checkoutPage.clickFinish();
    checkoutPage.getSuccessMessage().should('contain', 'Thank you for your order!');
  });
});