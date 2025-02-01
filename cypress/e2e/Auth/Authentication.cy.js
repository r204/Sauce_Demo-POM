import LoginPage from '../../pageObject/auth/LoginPage';
import SignupPage from '../../pageObject/auth/SignupPage';
import loginData from '../../fixtures/auth/loginData.json';
import SignupData from '../../fixtures/auth/signupData.json';

function fillLoginForm(email, password){
  LoginPage.enter_email(email);
  LoginPage.enter_password(password);
}

function fillSignupForm(firstname, lastname, email, password){
  SignupPage.enter_firstname(firstname);
  SignupPage.enter_lastname(lastname);
  SignupPage.enter_email(email);
  SignupPage.enter_password(password);
  SignupPage.enter_passwordCOnfirmation(password);
}

beforeEach(() => {
  LoginPage.visit_Login();
})
//Create Account Scenario
describe('SCR-CA-01 - Create Account', () => {
    it('TC-CA-01 - Create Account With valid test data',() =>{
      SignupPage.click_signup();
      cy.wait(1000)
      fillSignupForm(
        SignupData.validData.firstname,
        SignupData.validData.lastname,
        SignupData.validData.email,
        SignupData.validData.password
      );
      SignupPage.click_createAccount();
      SignupPage.expected_result(SignupData.redirecturl.url);
    })
    it('TC-CA-02 - Create Account With invalid email format',() =>{
      SignupPage.click_signup();
      cy.wait(1000)
      SignupPage.enter_firstname(SignupData.invalidData.firstname);
      SignupPage.enter_lastname(SignupData.invalidData.lastname);
      SignupPage.enter_email(SignupData.invalidData.email);
      SignupPage.enter_password(SignupData.invalidData.password);
      SignupPage.enter_passwordCOnfirmation(SignupData.invalidData.password);
      SignupPage.click_createAccount();
    })
})

//Login Scenario
describe('SCR-LGN-01 - Login To The System', () => {
    it('TC-LGN-01 - Login with valid account',() =>{
      fillLoginForm(loginData.validAccount.email, loginData.validAccount.password);
      LoginPage.click_loginButton()
      LoginPage.expected_result()    
    })
    it('TC-LGN-02 - Login with invalid account', () => {
      fillLoginForm(loginData.invalidAccount.email, loginData.invalidAccount.password);
      LoginPage.click_loginButton();
      LoginPage.account_notFound(loginData.incorrectMessage.message);
    })
    it('TC-LGN-03 - Login without fill the password form', () => {
      LoginPage.enter_email(loginData.validAccount.email);
      //LoginPage.enter_password(loginData.validAccount.password);
      LoginPage.click_loginButton()
      LoginPage.password_errormessage(loginData.errorMessage.message);
    })
    it('TC-LGN-04 - Login without fill email and password form',() =>{
      cy.wait(1000)
      LoginPage.click_loginButton()
      LoginPage.email_errormessage(loginData.errorMessage.message);
      LoginPage.password_errormessage(loginData.errorMessage.message);
    })
  })
  