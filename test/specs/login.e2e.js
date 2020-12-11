const LoginPage = require('../pageobjects/login.page');
const AccountPage = require('../pageobjects/account.page');

beforeEach(() => {
    LoginPage.open();
})

describe('My Login application', () => {
    it('should login with valid credentials', () => {
        LoginPage.login('tomsmith@mailinator.com', '908070');
        expect(AccountPage.accountMessage).toBeExisting();
        expect(AccountPage.accountMessage).toHaveTextContaining(
            'Welcome to your account. Here you can manage all of your personal information and orders.');
        LoginPage.logout();
    });

    it('try login with invalid email', () => {
        LoginPage.login('tonysmith@mailinator.com', '908070');
        expect(LoginPage.alert).toBeExisting();
        expect(LoginPage.alert).toHaveTextContaining(
            'Authentication failed.');
    });

    it('try login without email', () => {
        LoginPage.login('', '908070');
        expect(LoginPage.alert).toBeExisting();
        expect(LoginPage.alert).toHaveTextContaining(
            'An email address required.');
    });

    it('try login without password', () => {
        LoginPage.login('tomsmith@mailinator.com', '');
        expect(LoginPage.alert).toBeExisting();
        expect(LoginPage.alert).toHaveTextContaining(
            'Password is required.');
    });

    it('try login with invalid password', () => {
        LoginPage.login('tomsmith@mailinator.com', '123456');
        expect(LoginPage.alert).toBeExisting();
        expect(LoginPage.alert).toHaveTextContaining(
            'Authentication failed.');
    });
});


