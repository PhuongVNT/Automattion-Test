
import { test, expect } from '@playwright/test';

const { LoginPage } = require('../pages/LoginPage');
const { LoginData } = require('./data/login-data');

for( const data of LoginData) {
    test(data.title, async({page}) => {
        const loginPage = new LoginPage(page);

        await loginPage.goto();
        await loginPage.login(data.username, data.password);
        await expect(loginPage.getMessage())
        .toContainText(data.expectted);
    })
}