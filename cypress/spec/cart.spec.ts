import LoginPage from '../pages/login.page';
import {data} from '../testData/test_data';
import productPage from '../pages/cart.page';

describe('Removing a product from cart',( )=> {
beforeEach(()=>{
cy.visit('/');
LoginPage.txtuser().type(data.module.stand_user);
LoginPage.txtpass().type(data.module.password);
})

it('Remove a product from cart')

productPage.add();
productPage.remove();

})