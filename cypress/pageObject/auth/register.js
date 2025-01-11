///<reference types='cypress'/>

class Login {
    visit_Login() {
        cy.visit('customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/')
    }
}

export default Login;