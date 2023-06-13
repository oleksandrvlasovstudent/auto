const { Builder, By } = require('selenium-webdriver');

async function signIn() {
    let driver = await new Builder().forBrowser('firefox').build();

    try {
        await driver.get('http://localhost:8080');

        await driver.findElement(By.id('username')).sendKeys('your-username');
        await driver.findElement(By.id('password')).sendKeys('your-password');

        // Checking field filling
        let usernameField = await driver.findElement(By.id('username'));
        let passwordField = await driver.findElement(By.id('password'));

        let usernameValue = await usernameField.getAttribute('value');
        let passwordValue = await passwordField.getAttribute('value');

        if (usernameValue && passwordValue) {
            console.log('Fields are filled successfully!');
        } else {
            console.log('Fields filling failed.');
        }

        await driver.findElement(By.id('login')).click();

        // Adding verification for successful click on the 'login' element
        let loginButton = await driver.findElement(By.id('login'));
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
