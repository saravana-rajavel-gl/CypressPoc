class loginPage {
    get Username() {
        return cy.get("#UserName");
    }
    get Password() {
        return cy.get("#password-field");
    }
    get LoginBtn() {
        return cy.get(".btn-primary");
    }
    get map() {
        return cy.get('#map')
    }
    get forgotPwLink() {
        return cy.contains('Forgot Password');
    }
    get forgotUIDLink() {
        return cy.contains('Forgot Username');
    }
    get reportIncident() {
        return cy.get('.btn-link');
    }
    get poweredByOsprey(){
        return cy.get(".poweredByOsprey")
    }
    get LoggedinName(){
        return cy.get('.user-blurb')
    }
    get imLogo(){
        return cy.get('#ocsLogo')
    }
    clickReportIncident(){
        this.reportIncident.invoke('removeAttr','target').click();
    }
    login(Usernameval, passwordVal,expectedVal) {
        this.imLogo.should('exist');
        this.map.should('exist');
        this.forgotPwLink.should('exist');
        this.forgotUIDLink.should('exist');
        this.reportIncident.should('exist');
        this.poweredByOsprey.should('exist').should('have.attr','href',"https://ospreycompliancesoftware.com");
        this.forgotPwLink.should('have.text', "Forgot Password");
        this.forgotUIDLink.should('have.text', "Forgot Username");
        this.reportIncident.should('have.text', "Report an incident?");
        this.Username.type(Usernameval);
        this.Password.type(passwordVal);
        this.LoginBtn.click();
        cy.wait(3000);
        this.LoggedinName.should('exist').should('contain',expectedVal);
    }
    MultipleLogin(Usernameval, passwordVal) {
        this.imLogo.should('exist');
        this.map.should('exist');
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

