import { loginPage } from '../pages/loginPage';
import { inventoryPage } from '../pages/inventoryPage';
import { users } from '../support/users';

describe('Inventory & Product Interaction - Saucedemo', () => {
  beforeEach(() => {
    loginPage.visit();
    loginPage.loginWithUser(users.valid);
    inventoryPage.verifyIsOnInventoryPage();
  });

  it('Should update the cart badge to 3 when three different items are added', () => {
    inventoryPage.addBackpackToCart();
    inventoryPage.addBikeLightToCart();
    inventoryPage.addBoltTShirtToCart();

    // Validates if the badge rendered the number 3
    inventoryPage.getCartBadgeCount().should('have.text', '3');
  });

  it('Should remove the cart badge when removing an item from the storefront', () => {
    inventoryPage.addBackpackToCart();
    inventoryPage.getCartBadgeCount().should('have.text', '1');

    // Clicks the "Remove" button that replaces the "Add to cart" button
    inventoryPage.removeBackpackFromCart();

    // Validates if the DOM removed the badge element entirely (it does not render '0', it disappears)
    inventoryPage.getCartBadgeCount().should('not.exist');
  });

  it('Should correctly sort items by Price (low to high)', () => {
    // Interacts with the select dropdown using the value 'lohi'
    inventoryPage.sortProductsBy('lohi');

    inventoryPage.getItemPrices().then(($prices) => {
      // Creates a numeric array by extracting text, removing the "$" sign, and parsing to Float
      const prices = $prices.toArray().map(el => parseFloat(el.innerText.replace('$', '')));

      const firstPrice = prices[0];
      const lastPrice = prices[prices.length - 1];

      // Validation 1: The first item must be less than or equal to the las
      expect(firstPrice).to.be.at.most(lastPrice);

      // Senior Validation 2: Clones the array, sorts it mathematically via JS, and compares it with the UI array
      const sortedPrices = [...prices].sort((a, b) => a - b);
      expect(prices).to.deep.equal(sortedPrices);
    });
  });
});