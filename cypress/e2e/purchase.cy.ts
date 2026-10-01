// cypress/e2e/purchase.cy.ts

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
    // 1. Adicionar produto ao carrinho
    inventoryPage.addBackpackToCart();
    inventoryPage.goToCart();

    // 2. Validar produto no carrinho e prosseguir para Checkout
    cartPage.getCartItemName().should('contain', 'Sauce Labs Backpack');
    cartPage.clickCheckout();

    // 3. Preencher dados de Checkout usando os dados tipados
    if (users.valid.checkoutInfo) {
      checkoutPage.fillInformation(users.valid.checkoutInfo);
    }
    checkoutPage.clickContinue();

    // 4. Finalizar compra e validar mensagem de sucesso
    checkoutPage.clickFinish();
    checkoutPage.getSuccessMessage().should('contain', 'Thank you for your order!');
  });
});