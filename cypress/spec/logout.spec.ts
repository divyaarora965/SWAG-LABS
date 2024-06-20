import {LoginPage} from '../pages/login.page';
import {LogoutPage} from '../pages/logout.page';
import {data} from '../testData/test_data';

describe("User logs out of Application",()=>{
before(()=>{
    cy.visit('#/login');
    LoginPage.txtuser().type(data.module.stand_user);
})

it('Logout Action',()=>{
    LogoutPage.logout();
})
})