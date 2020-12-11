const Page = require('./page');

class LoginPage extends Page {
    get inputEmail () { return $('#email') }
    get inputPassword () { return $('#passwd') }
    get btnSubmitSignIn () { return $('#SubmitLogin') }
    get inputEmailCreate () { return $('#email_create') }
    get btnSubmitCreate () { return $('#SubmitCreate') }
    get alert() { return $('.alert') }

    login (email, password) {
        this.inputEmail.setValue(email);
        this.inputPassword.setValue(password);
        this.btnSubmitSignIn.click(); 
    }

    create (email) {
        this.inputEmailCreate.setValue(email);
        this.btnSubmitCreate.click(); 
    }

    open () {
        return super.open('controller=authentication&amp;amp;back=my-account');
    }

    logout () {
        return super.logout();
    }
}

module.exports = new LoginPage();
