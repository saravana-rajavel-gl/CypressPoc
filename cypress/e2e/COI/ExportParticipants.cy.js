import loginPage from "../../pages/COI/loginPage.js"

describe('Risk Manager Login', () => {
    // beforeEach(() => {

    //   });
    let userdata;
    before(() => {
        cy.fixture('COI/COI_Login').then((data) => {
            userdata = data;
        })
    })

    it('Risk Manager testing', () => {
        cy.visit('https://coi3qa.ospreycompliancesuite.com/coiriskmanager/Login.aspx');
        loginPage.login(userdata.username, userdata.password);
        cy.url().should('eq', 'https://coi3qa.ospreycompliancesuite.com/coiriskmanager/COI/AIDashboard.aspx') // => true
        cy.get('#breadCrumb table .BreadCrumbCurrentPage').contains('COI Dashboard') // Yield el in .nav containing 'About'

        cy.contains('Campaigns').click();
        cy.contains('Setup').click();
        cy.get('#ddCampaignDef').select('10171');
        cy.wait(7000);
        cy.get('#SetupMainDataGrid_ctl02_ctl00_Name').click();
        cy.wait(3000);
        cy.get('#campaignSubControl_GroupDataGrid_ctl02_lnkUserGroupDetails').click();
        cy.wait(7000);
        getIframeBody().find('#btnExportToExcel').should('exist').click();
        cy.wait(2000);
        getIframeBody().find('#btnCancel').should('exist').click()
    });
    const getIframeDocument = () => {
        return cy
            .get('#campaignSubControl_iframe4')
            .its('0.contentDocument').should('exist')
    }
    const getIframeBody = () => {
        // get the document
        return getIframeDocument()
            // automatically retries until body is loaded
            .its('body').should('not.be.undefined')
            .then(cy.wrap)
    }
});