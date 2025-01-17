import LoginPage from '../../pageObject/auth/LoginPage';
import SignupPage from '../../pageObject/auth/SignupPage';
import loginData from '../../fixtures/auth/loginData.json';
import SignupData from '../../fixtures/auth/signupData.json';

beforeEach(() => {
  LoginPage.visit_Login();
})
//Create Account Scenario
describe('SCR-CA-01 - Create Account', () => {
    it('TC-CA-01 - Create Account With valid test data',() =>{
      SignupPage.click_signup();
      cy.wait(1000)
      SignupPage.enter_firstname(SignupData.validData.firstname);
      SignupPage.enter_lastname(SignupData.validData.lastname);
      SignupPage.enter_email(SignupData.validData.email);
      SignupPage.enter_password(SignupData.validData.password);
      SignupPage.enter_passwordCOnfirmation(SignupData.validData.password);
      SignupPage.click_createAccount();
    })
})

//Login Scenario
describe('SCR-LGN-01 - Login To The System', () => {
    it('TC-LGN-01 - Login with valid account',() =>{
      LoginPage.enter_email(loginData.validAccount.email);
      LoginPage.enter_password(loginData.validAccount.password);
      LoginPage.click_loginButton()    
    })
    it('TC-LGN-02 - Login with invalid account', () => {
      LoginPage.enter_email(loginData.invalidAccount.email);
      LoginPage.enter_password(loginData.validAccount.password);
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
  