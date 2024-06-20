export class LoginPage{
    
    static txtuser(){
        return cy.get('[data-test=username]');
     }
    static txtpass(){
        return cy.get('[data-test=password]');
     }
     static btn(){
        return cy.get('[data-test=login-button]');
     }
     static invalid_message(){
        return cy.get('.error-message-container');
     }
}
export default LoginPage