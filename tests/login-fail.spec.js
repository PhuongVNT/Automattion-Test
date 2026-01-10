import { test, expect } from '@playwright/test';

test('User can not login with wronng password', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/login');
    await page.fill('#username', 'tomsmith');
    await page.fill('#password', 'wrong_passworld');
    await page.click('button[type="submit"]');
    const successMessage = page.locator('#flash');
    await expect(successMessage).toContainText('Your password is invalid!')
    console.log('LOGIN FAIL TEST PASSED');
})