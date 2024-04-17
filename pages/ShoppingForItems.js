const { I } = inject();

module.exports = {
  shoppingElements: {
    addBackPackToCart: '#add-to-cart-sauce-labs-backpack',
    addBikeLightToCart: 'add-to-cart-sauce-labs-bike-light',
    shoppingCartButton: '$shopping-cart-link',
    checkoutButton: '$checkout',
    checkoutFirstName: '#first-name',
    checkoutLastName: '#last-name',
    checkoutPostalCode: '#postal-code',
    checkoutContinueButton: '#continue',
    finishTransaction: '$finish'
  },

  loginAndShop(firstName, lastName) {

    I.login();
    I.click(this.shoppingElements.addBackPackToCart);
    I.click(this.shoppingElements.addBikeLightToCart);
    I.click(this.shoppingElements.shoppingCartButton);
    I.see('Sauce Labs Backpack');
    I.see('Sauce Labs Bike Light');
    I.click(this.shoppingElements.checkoutButton);
    I.fillField(this.shoppingElements.checkoutFirstName, firstName);
    I.fillField(this.shoppingElements.checkoutLastName, lastName);
    I.fillField(this.shoppingElements.checkoutPostalCode, '33809');
    I.click(this.shoppingElements.checkoutContinueButton);
    I.see('Price Total');
    I.click(this.shoppingElements.finishTransaction);
    
  }
}
