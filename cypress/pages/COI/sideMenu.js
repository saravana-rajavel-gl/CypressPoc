class sideMenu {    
    get homeLnk() {
        return cy.get("#OAIContainer_header_homeLink");
    }
    get toggleBtn(){
        return cy.get("#toggle-nav");
    }
    get reviewCenterLnk() {
        return cy.get("#OAIContainer_header_reviewerCenterLink");
    }
    get dashboardLnk() {
        return cy.get("#OAIContainer_header_dashboardLink");
    }
    get managementPlansLnk(){
        return cy.get("#OAIContainer_header_plansLink");
    }
    get reviewDisclosureLnk(){
        return cy.get("#OAIContainer_header_reviewLink");
    }

    
    get caseMgmtLnk(){
        return cy.get("#OAIContainer_header_caseLink");
    }
    get studyLnk(){
        return cy.get("#OAIContainer_header_studyLink");
    }
    get reportsLnk(){
        return cy.get('.nav-section>a[href="/coiriskmanager/COI/coiReportExecution.aspx"]');
    }
    get standardReportsLnk(){
        return cy.contains('Standard Reports');
    }
    get reviewDisclosureLnk(){
        return cy.contains('Standard Reports');
    }
    get campaignsLnk(){
        return cy.get('.nav-section>a[href="/coiriskmanager/OCS/ResponseHistory.aspx"]')
    }

}
module.exports = new sideMenu();
