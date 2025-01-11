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
        cy.get('button[type="submit"]').contains('Sign In');
    }
    email_errormessage(){
        cy.get('#email-error').contains('This is a required field')
    }

}

export default new LoginPage;