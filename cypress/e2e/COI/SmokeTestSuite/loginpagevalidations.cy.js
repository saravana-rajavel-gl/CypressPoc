import loginPage from "../../../pages/COI/loginPage.js";
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
    it('Verify User can change login page display language from the login page itself', () => {
        loginPage.logoImage.should('exist');
        loginPage.helpLink.should('exist').should('have.text','Need Help?');
        loginPage.Password.should('exist');
        loginPage.Username.should('exist');
        loginPage.LoginBtn.should('exist').should('have.value', 'Login');
        loginPage.forgotPwLink.should('exist').should('have.text','Forgot your password?');
        loginPage.forgotUIDLink.should('exist').should('have.text','Forgot your username?');
        loginPage.btnLanguageLnk.should('exist');
        loginPage.btnENLnk.should('exist');
        loginPage.btnRULnk.should('exist');
        loginPage.btnzhHantLnk.should('exist');
        loginPage.btnRULnk.should('exist').click();
        cy.get('#lblUserName').should('exist').should('have.text','Имя пользователя');
        cy.get('#lblPassword').should('exist').should('have.text','Пароль');
        
        loginPage.LoginBtn.should('exist').should('have.value', 'Вход в систему');
        loginPage.forgotPwLink.should('exist').should('have.text','Забыли Ваш пароль?');
        loginPage.forgotUIDLink.should('exist').should('have.text','Забыли Ваше имя пользователя?');        
        loginPage.helpLink.should('exist').should('have.text','Вам необходима помощь?');

        loginPage.btnzhHantLnk.should('exist').click();
        cy.get('#lblUserName').should('exist').should('have.text','用戶名');
        cy.get('#lblPassword').should('exist').should('have.text','密碼');
        
        loginPage.LoginBtn.should('exist').should('have.value', '登錄');
        loginPage.forgotPwLink.should('exist').should('have.text','忘了密碼？');
        loginPage.forgotUIDLink.should('exist').should('have.text','忘了用戶名？');        
        loginPage.helpLink.should('exist').should('have.text','需要幫助？');
    });
    it('Verify User can change login page display language from the login page itself', () => {
        loginPage.logoImage.should('exist');
        loginPage.helpLink.should('exist').should('have.text','Need Help?');
        loginPage.Password.should('exist');
        loginPage.Username.should('exist');
        loginPage.LoginBtn.should('exist').should('have.value', 'Login');
        loginPage.forgotPwLink.should('exist').should('have.text','Forgot your password?');
        loginPage.forgotUIDLink.should('exist').should('have.text','Forgot your username?');
        loginPage.btnLanguageLnk.should('exist');
        loginPage.btnENLnk.should('exist');
        loginPage.btnRULnk.should('exist');
        loginPage.btnzhHantLnk.should('exist');

        loginPage.btnRULnk.should('exist').click();
        cy.get('#lblUserName').should('exist').should('have.text','Имя пользователя');
        cy.get('#lblPassword').should('exist').should('have.text','Пароль');
        loginPage.LoginBtn.should('exist').should('have.value', 'Вход в систему');
        loginPage.forgotPwLink.should('exist').should('have.text','Забыли Ваш пароль?');
        loginPage.forgotUIDLink.should('exist').should('have.text','Забыли Ваше имя пользователя?');        
        loginPage.helpLink.should('exist').should('have.text','Вам необходима помощь?');

        loginPage.btnzhHantLnk.should('exist').click();
        cy.get('#lblUserName').should('exist').should('have.text','用戶名');
        cy.get('#lblPassword').should('exist').should('have.text','密碼');      
        loginPage.LoginBtn.should('exist').should('have.value', '登錄');
        loginPage.forgotPwLink.should('exist').should('have.text','忘了密碼？');
        loginPage.forgotUIDLink.should('exist').should('have.text','忘了用戶名？');        
        loginPage.helpLink.should('exist').should('have.text','需要幫助？');

       // loginPage.btnLanguageLnk.should('exist').invoke("removeAttr", "target").click();
    });
    
    it('Login Page validations', () => {
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
});