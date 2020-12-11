const LoginPage = require('../pageobjects/login.page');
const AccountPage = require('../pageobjects/account.page');
const RegisterPage = require('../pageobjects/register.page');
const { dataCustomer } = require('../helpers/register.helper');

beforeEach(() => {
    LoginPage.open();
})

describe('Register new user', () => {
    it('try register with invalid email', () => {
        LoginPage.create('daniel');
        expect(LoginPage.alert).toBeExisting();
        expect(LoginPage.alert).toHaveTextContaining(
            'Invalid email address.');
    });

    it('try register without password', () => {
        const data = dataCustomer();
        LoginPage.create(data.email);
        RegisterPage.inputPersonalInfo(data.firstName, data.lastName, '');
        RegisterPage.selectionBirth(data.day, data.month, data.year);
        RegisterPage.inputAddressInfo (data.street, data.apartment, data.city, data.state, data.zipCode, data.cellPhone, data.alias);
        RegisterPage.btnSubmitAccount.click();
        expect(RegisterPage.alert).toBeExisting();
        expect(RegisterPage.alert).toHaveTextContaining(
            'passwd is required.');
    });

    it('try register with invalid password', () => {
        const data = dataCustomer();
        LoginPage.create(data.email);
        RegisterPage.inputPersonalInfo(data.firstName, data.lastName, '123');
        RegisterPage.selectionBirth(data.day, data.month, data.year);
        RegisterPage.inputAddressInfo (data.street, data.apartment, data.city, data.state, data.zipCode, data.cellPhone, data.alias);
        RegisterPage.btnSubmitAccount.click();
        expect(RegisterPage.alert).toBeExisting();
        expect(RegisterPage.alert).toHaveTextContaining(
            'passwd is invalid.');
    });

    it('try register with registered email', () => {
        LoginPage.create('tomsmith@mailinator.com');
        expect(RegisterPage.alert).toBeExisting();
        expect(RegisterPage.alert).toHaveTextContaining(
            'An account using this email address has already been registered. Please enter a valid password or request a new one.');
    });

    it('should register with valid email', () => {
        const data = dataCustomer();
        LoginPage.create(data.email);
        RegisterPage.inputPersonalInfo(data.firstName, data.lastName, data.password);
        RegisterPage.selectionBirth(data.day, data.month, data.year);
        RegisterPage.inputAddressInfo (data.street, data.apartment, data.city, data.state, data.zipCode, data.cellPhone, data.alias);
        RegisterPage.btnSubmitAccount.click();
        expect(AccountPage.accountMessage).toBeExisting();
        expect(AccountPage.accountMessage).toHaveTextContaining(
            'Welcome to your account. Here you can manage all of your personal information and orders.');
        LoginPage.logout();
    });
});


