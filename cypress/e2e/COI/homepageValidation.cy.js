//const { data } = require("cypress/types/jquery");
import loginPage from "../../pages/COI/loginPage.js"
describe('Risk Manager Laanding Page Validations', () => {
    let userdata;
    before(() => {
        cy.fixture('COI/COI_Login').then((data) => {
            userdata = data;
        })
    })
    beforeEach(() => {
        cy.visit('https://coi3qa.ospreycompliancesuite.com/coiriskmanager/Login.aspx');
    })
    it('Verify the user login and landing page with single User', () => {
        loginPage.login(userdata.username, userdata.password);
        cy.get('.user-blurb').should('contain', userdata.expected);
    });
    it('Verify the user login and landing page with Multiple Users value', () => {
        cy.fixture('COI/COI_Login2').then((data1) => {
            data1.forEach((userdetails) => {
                cy.visit('https://coi3qa.ospreycompliancesuite.com/coiriskmanager/Login.aspx');
                cy.wait(7000);
                loginPage.MultipleLogin(userdetails.username, userdetails.password);
                cy.wait(7000);
                if (userdetails.username == "Global.logic" && userdetails.password == "Demo1234!") {
                    cy.get('.user-blurb').should('contain', userdetails.expected);
                    cy.wait(7000);
                    //cy.get('[title="Log Out"] > .fa > span').click();
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
    it('Verify the logged in user can view Home Menu item and is able to click on to view Home Page ', () => {
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
    it('Verify that user can view forms that need to be reviewed in review center if any of participants for whom he is supervisor submits a form', () => {
        loginPage.login(userdata.username, userdata.password);
        cy.wait(8000);
        cy.get("#OAIContainer_header_reviewerCenterLink").should('exist').click();
        cy.get('.BreadCrumbCurrentPage').should('have.text', 'Reviewer Center');
        cy.get('.table.disclosures-for-review-table').should('be.visible');
        if (cy.get('.table.disclosures-for-review-table>tbody>td').should('not.exist')) {

        }
        cy.get('.sc-bxivhb.diQBEv>INPUT').should('be.visible');
        cy.get('input[placeholder="Name, Conflicts..."]').should('exist').type(userdata.username);
    })
});