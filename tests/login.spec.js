import { test, expect } from '@playwright/test';

test('User can login successfully', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/login');
    await page.fill('#username', 'tomsmith');
    await page.fill('#password', 'SuperSecretPassword!');
    await page.click('button[type="submit"]');
    const successMessage = page.locator('#flash');
    await expect(successMessage).toContainText('You logged into a secure area!')
    console.log('LOGIN TEST PASSED');

})