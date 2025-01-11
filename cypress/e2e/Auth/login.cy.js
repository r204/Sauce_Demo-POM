import LoginPage from '../../pageObject/auth/LoginPage';
import loginData from '../../fixtures/auth/loginData.json';

beforeEach(() => {
  LoginPage.visit_Login();
})

describe('Login To The System', () => {
    it('TC-LGN-01 - Login with invalid account', () => {
      LoginPage.enter_email(loginData.invalidAccount.email);
      LoginPage.enter_password(loginData.validAccount.password);
      LoginPage.click_loginButton()
      LoginPage.account_notFound(loginData.incorrectMessage.message);
    })
    it('TC-LGN-02 - Login without fill the password form', () => {
      LoginPage.enter_email(loginData.validAccount.email);
      //LoginPage.enter_password(loginData.validAccount.password);
      LoginPage.click_loginButton()
      LoginPage.password_errormessage(loginData.errorMessage.message);
    })
  })
  