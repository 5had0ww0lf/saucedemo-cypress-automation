import { loginPage } from '../pages/loginPage';
import { inventoryPage } from '../pages/inventoryPage';
import { cartPage } from '../pages/cartPage';
import { checkoutPage } from '../pages/checkoutPage';
import { users } from '../support/users';

describe('Checkout Form Validation & Tax Calculations - Saucedemo', () => {
  const { firstName, lastName, postalCode } = users.valid.checkoutInfo!;
  beforeEach(() => {
    loginPage.visit();
    loginPage.loginWithUser(users.valid);
    inventoryPage.verifyIsOnInventoryPage();
    inventoryPage.addBackpackToCart();
    inventoryPage.goToCart();
    cartPage.clickCheckout();
  });

  it('Should display error message when First Name is missing', () => {
    checkoutPage.fillInformation({ lastName, postalCode });
    checkoutPage.clickContinue();

    checkoutPage.getErrorMessage().should('contain', 'Error: First Name is required');
  });

  it('Should display error message when Last Name is missing', () => {
    checkoutPage.fillInformation({ firstName, postalCode });
    checkoutPage.clickContinue();

    checkoutPage.getErrorMessage().should('contain', 'Error: Last Name is required');
  });

  it('Should display error message when Postal Code is missing', () => {
    checkoutPage.fillInformation({ firstName, lastName });
    checkoutPage.clickContinue();

    checkoutPage.getErrorMessage().should('contain', 'Error: Postal Code is required');
  });

  it('Should correctly calculate tax and total amount in checkout overview', () => {
    if (users.valid.checkoutInfo) {
      checkoutPage.fillInformation(users.valid.checkoutInfo);
    }
    checkoutPage.clickContinue();

    // Mathematical verification: Subtotal + Tax = Total
    checkoutPage.getItemSubtotal().then((subtotal) => {
      checkoutPage.getTax().then((tax) => {
        checkoutPage.getTotal().then((total) => {
          const expectedTotal = parseFloat((subtotal + tax).toFixed(2));
          expect(total).to.equal(expectedTotal);
        });
      });
    });
  });
});