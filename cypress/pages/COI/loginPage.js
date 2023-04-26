class loginPage {
    get Username() {
        return cy.get("#userName");
    }
    get Password() {
        return cy.get("#password");
    }
    get LoginBtn() {
        return cy.get("#loginButton");
    }
    get logoImage() {
        return cy.get("#logoImage");
    }
    get forgotPwLink() {
        return cy.get("#forgotPwLink");
    }
    get forgotUIDLink() {
        return cy.get("#forgotUIDLink");
    }
    get helpLink() {
        return cy.get("#helpLink");
    }
    login(Usernameval, passwordVal) {
        this.Username.type(Usernameval);
        this.Password.type(passwordVal);
        this.LoginBtn.click();
    }
    MultipleLogin(Usernameval, passwordVal) {
        this.logoImage.should('exist');
        this.forgotPwLink.should('exist');
        this.forgotUIDLink.should('exist');
        this.helpLink.should('exist');
        this.forgotPwLink.should('have.text', "Forgot your password?");
        this.forgotUIDLink.should('have.text', "Forgot your username?");
        this.helpLink.should('have.text', "Need Help?");
        this.Username.type(Usernameval);
        this.Password.type(passwordVal);
        this.LoginBtn.click();
    }
}
module.exports = new loginPage();

