import { test, expect } from '@playwright/test';

test('Login API - successs', async ({request}) => {
    const response = await request.post('https://reqres.in/api/login', {
        data: {
            email: 'eve.holt@reqres.in',
            password: 'cityslicka'
        }
    })
    //console.log(await response.text());
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.token).toBeTruthy();
}) 