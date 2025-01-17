///<reference types='cypress'/>

class SignupPage {
    visit_Login() {
        cy.visit('customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/')
    }
    click_signup(){
        cy.contains('Create an Account').click();
    }
    enter_firstname(firstname){
        cy.get('#firstname').type(firstname);
    }
    enter_lastname(lastname){
        cy.get('#lastname').type(lastname);
    }
    enter_email(email){
        cy.get('#email_address').type(email);
    }
    enter_password(password){
        cy.get('#password').type(password);
    }
    enter_passwordCOnfirmation(password){
        cy.get('#password-confirmation').type(password);
    }
    click_createAccount(){
        cy.get('button[type="submit"]').contains('Create an Account').click();
    }

    firstname_error(errorMessage){
        cy.get('#firstname-error').should('contain', errorMessage)
    }
}

export default new SignupPage;