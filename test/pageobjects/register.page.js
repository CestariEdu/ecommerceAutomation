const Page = require('./page');

class RegisterPage extends Page {
    get radioTitleMr () { return $('#id_gender1') }
    get inputFirstName () { return $('#customer_firstname') }
    get inputLastName () { return $('#customer_lastname') }
    get inputPassword () { return $('#passwd') }
    get selectDay () { return $('#days') }
    get selectMonth () { return $('#months') }
    get selectYear () { return $('#years') }
    get inputAddress1() { return $('#address1') }
    get inputAddress2() { return $('#address2') }
    get inputCity() { return $('#city') }
    get selectState() { return $('#id_state') }
    get inputZipCode() { return $('#postcode') }
    get inputAdditionalInfo() { return $('#other') }
    get inputMobilePhone() { return $('#phone_mobile') }
    get inputAddressAlias() { return $('#alias') }
    get btnSubmitAccount() { return $('#submitAccount') }
    get alert() { return $('.alert') }

    login (username, password) {
        this.inputEmail.setValue(username);
        this.inputPassword.setValue(password);
        this.btnSubmitSignIn.click(); 
    }

    selectionBirth (day, month, year) {
        this.selectDay.selectByAttribute('value', day);
        this.selectMonth.selectByAttribute('value', month);
        this.selectYear.selectByAttribute('value', year);
    }

    selectionState (state) {
        this.selectState.selectByVisibleText(state);
    }

    inputPersonalInfo(firstName, lastName, password) {
        this.radioTitleMr.click();
        this.inputFirstName.setValue(firstName);
        this.inputLastName.setValue(lastName);
        this.inputPassword.setValue(password);
    }

    inputAddressInfo (street, apartment, city, state, zipCode, cellPhone, alias) {
        this.inputAddress1.setValue(street);
        this.inputAddress2.setValue(apartment);
        this.inputCity.setValue(city);
        this.selectionState(state);
        this.inputZipCode.setValue(zipCode);
        this.inputMobilePhone.setValue(cellPhone);
        this.inputAddressAlias.setValue(alias);
    }
}

module.exports = new RegisterPage();
