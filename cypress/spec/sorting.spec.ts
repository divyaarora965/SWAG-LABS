import LoginPage from '../pages/login.page';
import {data} from '../testData/test_data';
import sortingPage from '../pages/sorting.page';

describe('Sorting Products',( )=> {
beforeEach(()=>{
cy.visit('/');
LoginPage.txtuser().type(data.module.stand_user);
LoginPage.txtpass().type(data.module.password);
});


it('Sorting Products (Low to High)',()=>{
    sortingPage.sortLtoH();
})

it('Sorting Products by Name (A to Z)',()=>{
    sortingPage.sortAtoZ();
})
})
