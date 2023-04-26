class reportIncident {
    get ReportCategory() {
        return cy.get("#report-entrance>a");
    }
    get viewIncident() {
        return cy.get('#view-entrance>a');
    }
    get assitance() {
        return cy.get('.assistance-line');
    }
    get imLogoImage(){
        return cy.get('.image-wrapper > img');
    }
    get reportIncidentLink(){
        return cy.get('.brand-text');
    }
    get supportLnk(){
        return cy.contains('Support');
    }
    get FAQLink(){
        return cy.contains('FAQ');
    }
    get selectLang(){
        return cy.get("Language");
    }
    clickReportCategory() {
        this.ReportCategory.click();
    }
    clickviewIncident() {
        this.viewIncident.click();
    }
}
module.exports = new reportIncident();