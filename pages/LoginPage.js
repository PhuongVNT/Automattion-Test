class LoginPage {

    constructor(page){

        this.page = page;

        // Locators
        this.usernameInput = '#username';
        this.passwordInput = '#password';
        this.loginButton = 'button[type="submit"]';
        this.massage = '#flash';
        
    }

    async goto() {
        await this.page.goto('https://the-internet.herokuapp.com/login');
    }

    async login(username, password) {
        await this.page.fill(this.usernameInput, username);
        await this.page.fill(this.passwordInput, password);
        await this.page.click(this.loginButton);
    }

    getMessage() {
        return this.page.locator(this.massage);
    }

}
module.exports = { LoginPage };