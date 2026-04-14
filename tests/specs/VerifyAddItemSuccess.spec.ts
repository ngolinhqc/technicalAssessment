import test, { expect } from '@playwright/test';
import { CartPage } from '../pages/CartPage';
import { InventoryPage } from '../pages/InventoryPage';
import { LoginPage } from '../pages/LoginPage';
import path from 'path';

test.describe('Login and add item', () => {
    let loginPage: LoginPage;
    let inventoryPage: InventoryPage;
    let cartPage: CartPage;
    
    const filePath = path.join(__dirname, process.env.FILE_PATH!);
    let rowNum = 2
    const username = process.env.USERNAME_TEST!;
    const password = process.env.PASSWORD_TEST!;

    test.beforeEach(async({page}) => {
        loginPage = new LoginPage(page);
        inventoryPage = new InventoryPage(page);
        cartPage = new CartPage(page);
    })
    test('Verify add item success', async ({page}) => {
        console.log(filePath);
        await loginPage.navigateTo();
        await loginPage.login(username, password);
        await inventoryPage.addToCart(filePath, rowNum);
        await inventoryPage.navigateToCart();
        expect(await cartPage.isAllItemDiplay(filePath, rowNum)).toBeTruthy();
    })

})
