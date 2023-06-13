const { Builder, By } = require('selenium-webdriver');

class LoginPage {
    constructor(driver) {
        this.driver = driver;
        this.usernameInput = By.id('username');
        this.passwordInput = By.id('password');
        this.loginButton = By.id('login');
    }

    async setUsername(username) {
        await this.driver.findElement(this.usernameInput).sendKeys(username);
    }

    async setPassword(password) {
        await this.driver.findElement(this.passwordInput).sendKeys(password);
    }

    async clickLoginButton() {
        await this.driver.findElement(this.loginButton).click();
    }
}

async function signIn() {
    let driver = await new Builder().forBrowser('firefox').build();
    let loginPage = new LoginPage(driver);

    try {
        await driver.get('http://localhost:8080');

        await loginPage.setUsername('your-username');
        await loginPage.setPassword('your-password');

        //  // Checking field filling
        let usernameValue = await loginPage.driver.findElement(loginPage.usernameInput).getAttribute('value');
        let passwordValue = await loginPage.driver.findElement(loginPage.passwordInput).getAttribute('value');

        if (usernameValue && passwordValue) {
            console.log('Fields are filled successfully!');
        } else {
            console.log('Fields filling failed.');
        }

        await loginPage.clickLoginButton();

       // Adding verification for successful click on the 'login' element
        let loginButton = await loginPage.driver.findElement(loginPage.loginButton);
        let isClicked = await loginButton.isDisplayed();

        if (isClicked) {
            console.log('Click on login button was successful!');
        } else {
            console.log('Click on login button failed.');
        }

    } finally {
        await driver.quit();
    }
}

signIn();
