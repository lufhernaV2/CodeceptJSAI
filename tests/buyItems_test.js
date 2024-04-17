Feature('Go shopping for basic items');

Scenario('Go shopping for some items',  ({ I, shoppingForItemsPage }) => {
    I.login();
    shoppingForItemsPage.loginAndShop('Luis', 'Shmuis');
});