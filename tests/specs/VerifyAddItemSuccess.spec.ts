import test, { expect } from '@playwright/test';
import { CartPage } from '../pages/CartPage';
import { InventoryPage } from '../pages/InventoryPage';
import { LoginPage } from '../pages/LoginPage';
import path from 'path';

test.describe('Login and add item', () => {
    let loginPage: LoginPage;
    let inventoryPage: InventoryPage;
    let cartPage: CartPage;
    let url = 'https://www.saucedemo.com/';
    let username = 'standard_user';
    let password = 'secret_sauce';
    const filePath = path.join(__dirname, '../data/dataTest.xlsx');
    let rowNum = 2


    test.beforeEach(async({page}) => {
        loginPage = new LoginPage(page);
        inventoryPage = new InventoryPage(page);
        cartPage = new CartPage(page);
    })
    test.only('Verify add item success', async ({page}) => {
        await loginPage.navigateTo(url);
        await loginPage.login(username, password);
        await inventoryPage.addToCart(filePath, rowNum);
        await inventoryPage.navigateToCart();
        expect(await cartPage.isAllItemDiplay(filePath, rowNum)).toBeTruthy();
    })

})
