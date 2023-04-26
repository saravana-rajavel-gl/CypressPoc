import loginPage from "../../pages/COI/loginPage.js";
import sideMenu from "../../pages/COI/sideMenu.js";
describe('Risk Manager Sanity Test suite', () => {
    let userdata;
    before(() => {
        cy.fixture('COI/COI_Login').then((data) => {
            userdata = data;
        })
    })
    beforeEach(() => {
        cy.visit('https://coi3qa.ospreycompliancesuite.com/coiriskmanager/Login.aspx');
    })
    it.skip('Login Page validations', () => {
        cy.fixture('COI/COI_Login2').then((data1) => {
            data1.forEach((userdetails) => {
                cy.visit('https://coi3qa.ospreycompliancesuite.com/coiriskmanager/Login.aspx');
                cy.wait(7000);
                loginPage.MultipleLogin(userdetails.username, userdetails.password);
                cy.wait(7000);
                if (userdetails.username == "Global.logic" && userdetails.password == "Demo1234!") {
                    cy.get('.user-blurb').should('contain', userdetails.expected);
                    cy.wait(7000);
                    cy.wait(7000);
                    cy.visit('https://coi3qa.ospreycompliancesuite.com/coiriskmanager/Login.aspx');
                }
                else {
                    cy.get(".annunciator").should('exist');
                    cy.wait(7000);
                }
            })
        })
    });
    it.skip('Verify the logged in user can view Home Menu item and is able to click on to view Home Page ', () => {
        loginPage.login(userdata.username, userdata.password);
        cy.wait(7000);
        cy.get('.nav-section').should('have.length', 10);
        cy.get("#OAIContainer_header_homeLink").should('exist');
        cy.get("#OAIContainer_header_homeLink").click();
        cy.wait(2000);
        cy.get('.BreadCrumbCurrentPage').should('have.text', 'Home');
        cy.get('#ParentDiv>div').should('have.length', 13);
        cy.get('#pnlWorkActions > .titleSectionCompete').should('contain', 'Tasks to Complete');
        cy.get('#workActionsControl_WorkItemDataGrid> tbody > .DataGridHeader').contains("Actions").should('exist');
        cy.get('#rcCompleteGrid>tbody>.DataGridItem>td>input').should('be.visible');
        cy.get('#divPlans>#lnkPlans').should('be.visible');
        cy.get('#attCompleteGrid>tbody>.DataGridItem>td>input').should('be.visible');
        cy.get('#giftsGrid>tbody>.DataGridItem>td>input').should('be.visible');
    });

    it.skip('Verify that user can view forms that need to be reviewed in review center if any of participants for whom he is supervisor submits a form', () => {
        loginPage.login(userdata.username, userdata.password);
        cy.wait(8000);
        cy.get("#OAIContainer_header_reviewerCenterLink").should('exist').click();
        cy.get('.BreadCrumbCurrentPage').should('have.text', 'Reviewer Center');
        cy.get('.table.disclosures-for-review-table').should('be.visible');
        if (cy.get('.table.disclosures-for-review-table>tbody>td').should('not.exist')) {

        }
        cy.get('.sc-bxivhb.diQBEv>INPUT').should('be.visible');
        cy.get('input[placeholder="Name, Conflicts..."]').should('exist').type(userdata.username);
    });
    it.skip('Verify that user can view My Management Plans', () => {
        loginPage.login(userdata.username, userdata.password);
        cy.wait(8000);
        sideMenu.managementPlansLnk.should('exist').click();
        cy.get('.BreadCrumbCurrentPage').should('have.text', 'Management Plans');
        cy.wait(8000);
        cy.get("#detailGridContainer").should("exist");
        cy.get("#detailGrid").should("exist");
        cy.get("#detailGrid tbody tr.DataGridHeader").its("length").should("be.gte", 7);
        cy.get("#detailGrid tbody tr.DataGridItem").its("length").should("be.gte", 9);
        cy.get("#detailGrid tbody tr.DataGridItem td").first().should("have.text", '142').click();
        cy.wait(8000);
        cy.get("#lblPlanDetailsSection").should("exist").should("have.text", "Plan Details")
        cy.get("#plandetails").should("exist").should("be.disabled");
        cy.get('#detailGrid tbody tr.DataGridItem td').should('contain.text', 'Published').first().click();
        cy.get('#btnSign').should('contain.text', 'Sign').click();
        cy.on("window:confirm", (t) => {
            //verify text on pop-up
            expect(t).to.contain("'By signing this plan you affirm that you have read and agree to the assigned management plan. If you have questions about it, please contact your supervisor or management plan administrator before signing the plan.'");
        })
    });
    it.skip('Verify that user can view Study Management', () => {
        loginPage.login(userdata.username, userdata.password);
        cy.wait(8000); 
        sideMenu.studyLnk.should('exist').click();
        cy.get('.BreadCrumbCurrentPage').should('have.text', 'Study Management');
        cy.get('#addNew').should('be.visible');
        cy.get("#search").should("be.visible");
        cy.get("#txtUDF1").should("exist").type("GLTest Study Management141")
        cy.get("#commonSearch_search").should("be.visible").click();
        cy.get("#commonSearch_clearSelection").should("be.visible");
        cy.get('#searchResults tbody tr.DataGridItem td').first().should('contain.text', 'GLTest Study Management141').first().click();
    });
    it.skip("Verify that user can view Reports with toggle sub menu",()=>{
        loginPage.login(userdata.username, userdata.password);
        cy.wait(8000); 
        sideMenu.reportsLnk.should('exist').click();
        sideMenu.reportsLnk.parent().find("ul.sub-nav>li").its("length").should("equal",2);
        sideMenu.reportsLnk.parent().find("ul.sub-nav>li>a").first().should("have.text","Standard Reports").should("exist").click();
        cy.get('.BreadCrumbCurrentPage').should('have.text', 'Reports');
        cy.get("#btnRunReportType").should("exist").should("have.value", "Run Report");
        cy.get("#btnClearPref").should("exist").should("have.value", "Reset Preferences");
        cy.get("#TimeStampGridView tbody tr.DataGridItem").its("length").should("be.gte", 1);
        sideMenu.reportsLnk.parent().find("ul.sub-nav>li>a").eq(1).should("have.text","Report Builder").should("exist").click();
        getIframeBody().find(".page-header").should("exist").should("have.text","Widgets");
        getIframeBody().find(".page-heading-title>a").should("exist");
        getIframeBody().find("#widgets tbody tr").its("length").should("be.gte", 1);
        getIframeBody().find("#widgets tbody tr td a").its("length").should("be.gte", 3);
    });
    it("Verify that user can view Campaigns with toggle sub menu",()=>{
        loginPage.login(userdata.username, userdata.password);
        cy.wait(8000); 
        sideMenu.campaignsLnk.eq(1).should('exist').should("have.text","Campaigns ").click();
        sideMenu.campaignsLnk.eq(1).parent().find("ul.sub-nav>li").its("length").should("equal",3);
        sideMenu.campaignsLnk.eq(1).parent().find("ul.sub-nav>li>a").eq(1).should("have.text","Review").should("exist");
        sideMenu.campaignsLnk.eq(1).parent().find("ul.sub-nav>li>a").eq(2).should("have.text","Manager").should("exist");
        sideMenu.campaignsLnk.eq(1).parent().find("ul.sub-nav>li>a").first().should("have.text","Setup").should("exist").click();
        cy.get('#CampaignSetupTitle').should('have.text', 'Campaign Template Setup');
        cy.get("#ddCampaignDef").should("exist").should("have.value", "Run Report");
        cy.get("#ddCampaignDef>option").its("length").should("be.gte", 1);
        cy.get("#btnAdd").should("exist").
        cy.get("#TimeStampGridView tbody tr.DataGridItem").its("length").should("be.gte", 1);
        sideMenu.campaignsLnk.eq(1).parent().find("ul.sub-nav>li>a").eq(1).should("have.text","Report Builder").should("exist").click();
        getIframeBody().find(".page-header").should("exist").should("have.text","Widgets");
        getIframeBody().find(".page-heading-title>a").should("exist");
        getIframeBody().find("#widgets tbody tr").its("length").should("be.gte", 1);
        getIframeBody().find("#widgets tbody tr td a").its("length").should("be.gte", 3);
    });
    const getIframeDocument = () => {
        return cy
            .get('#Ai_iframe')
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