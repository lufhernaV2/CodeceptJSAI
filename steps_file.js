// in this file you can append custom step methods to 'I' object

module.exports = function() {
  return actor({

    login: function() {
      this.amOnPage('https://www.saucedemo.com/');
      this.fillField('Username', 'standard_user');
      this.fillField('Password', 'secret_sauce');
      this.click('Login');
    }
    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.

  });
}
