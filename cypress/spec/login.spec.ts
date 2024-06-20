import LoginPage from '../pages/login.page';
import {data} from '../testData/test_data';
let url:string= Cypress.config().baseUrl as string;

describe('SWAG LABS up and running',()=>{
    it('successfully loads',()=>{
        cy.visit(url);
    })

it('should login as standard user',()=>{
    LoginPage.txtuser().type(data.module.stand_user);
    LoginPage.txtpass().type(data.module.password)
    LoginPage.btn().click();
})

it('should login the user as Locked user',()=>{
    LoginPage.txtuser().type(data.module.lock_user)
    LoginPage.txtpass().type(data.module.password)
    LoginPage.btn().click();
})

it('Attempts to login with invalid credentials', () => {
    LoginPage.txtuser().type(data.module.invalid_user)
    LoginPage.txtpass().type(data.module.invalid_pass)
    LoginPage.invalid_message().should('be.visible');
})
})