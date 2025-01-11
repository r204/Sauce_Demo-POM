///<reference types='cypress'/>

class LoginPage {
    visit_Login() {
        cy.visit('customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/');
    }
    enter_email(email){
        cy.get('#email').type(email);
    }
    enter_password(password){
        cy.get('#pass').type(password);
    }
    click_loginButton(){
        cy.get('button[type="submit"]').contains('Sign In').click();
    }
    email_errormessage(errorMessage){
        cy.get('#email-error').contains(errorMessage)
    }
    password_errormessage(errorMessage){
        cy.get('#pass-error').contains(errorMessage)
    }
    account_notFound(incorrectMessage){
        cy.get('.message-error').contains(incorrectMessage)
    }

}

export default new LoginPage;