const pure = require('pure-gen');
pure.setLocale('en_US')

function dataCustomer() {
    return {
        email: pure.internet.email(undefined, undefined, 'mail.qa.br'),
        firstName: pure.name.firstName(),
        lastName: pure.name.lastName(),
        password: pure.internet.password(),
        day: '28',
        month: '12',
        year: '1994',
        street: pure.address.streetName(),
        apartment: pure.address.secondaryAddress(),
        city: pure.address.city(),
        state: pure.address.state(), 
        zipCode: pure.address.zipCodeByState(this.state),
        cellPhone: pure.phone.phoneNumber('+##(##)#####-####'),
        alias: 'House',
    }
}

module.exports = {
    dataCustomer
}
