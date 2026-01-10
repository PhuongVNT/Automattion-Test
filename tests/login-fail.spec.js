import { test, expect } from '@playwright/test';

const { LoginPage } = require('../pages/LoginPage');

test('User can not login with wronng password', async ({page}) => {
    
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('tomsmith', 'WrongPassword!');

    await expect(loginPage.getMessage()).toContainText('Your password is invalid!');

})