import { test, expect } from '@playwright/test';

const { LoginPage } = require('../pages/LoginPage');

test('User can login successfully', async ({page}) => {

    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('tomsmith', 'SuperSecretPassword!');

    await expect(loginPage.getMessage())
    .toContainText('You logged into a secure area!');

})