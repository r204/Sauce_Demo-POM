///<reference types='cypress'/>

class LoginPage {
    visit = 'customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/'
    email = '#email'
    pswd = '#pass'
    email_errmsg = '#email-error'
    pswd_errmsg = '#pass-error'
    login_btn = 'button[type="submit"]'
    error_msg = '.message-error'

    visit_Login() {
        cy.visit(this.visit);
    }
    enter_email(email){
        cy.get(this.email).type(email);
    }
    enter_password(password){
        cy.get(this.pswd).type(password);
    }
    click_loginButton(){
        cy.get(this.login_btn).contains('Sign In').click()
    }
    email_errormessage(errorMessage){
        cy.get(this.email_errmsg).should('contain', errorMessage)
    }
    password_errormessage(errorMessage){
        cy.get(this.pswd_errmsg).should('contain', errorMessage)
    }
    account_notFound(incorrectMessage){
        cy.get(this.error_msg).should('contain', incorrectMessage)
    }
    emailpassword_errorMessage(errorMessage){
        //cy.get('.message-error').should('contain', errorMessage)
        cy.get(this.error_msg).should('contain', errorMessage)
    }
    expected_result(redirecturl){
        cy.url().should('include', "/")
    }

}

export default new LoginPage;