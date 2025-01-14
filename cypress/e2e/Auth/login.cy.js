import LoginPage from '../../pageObject/auth/LoginPage';
import Signup from '../../pageObject/auth/SignUp';
import loginData from '../../fixtures/auth/loginData.json';

beforeEach(() => {
  LoginPage.visit_Login();
})
//Create Account Scenario
describe('Create Account', () => {
    it('TC-SCR-01 - Create Account With valid test data',()=>{
      
    })
})

//Login Scenario
describe('Login To The System', () => {
    it('TC-LGN-01 - Login with valid account',() =>{
      LoginPage.enter_email(loginData.validAccount.email);
      LoginPage.enter_password(loginData.validAccount.password);
      LoginPage.click_loginButton()    
    })
    it('TC-LGN-02 - Login with invalid account', () => {
      LoginPage.enter_email(loginData.invalidAccount.email);
      LoginPage.enter_password(loginData.validAccount.password);
      LoginPage.click_loginButton()
      LoginPage.account_notFound(loginData.incorrectMessage.message);
    })
    it('TC-LGN-03 - Login without fill the password form', () => {
      LoginPage.enter_email(loginData.validAccount.email);
      //LoginPage.enter_password(loginData.validAccount.password);
      LoginPage.click_loginButton()
      LoginPage.password_errormessage(loginData.errorMessage.message);
    })
    it('TC-LGN-04 - Login without fill email and password form',() =>{
      LoginPage.click_loginButton()
      LoginPage.emailpassword_errorMessage(loginData.emailpassword_required);
    })
  })
  