export class sortingPage{

static sortLtoH(){
    cy.get('.product_sort_container').select('Price (low to high)');
}

static sortAtoZ(){
    cy.get('.product_sort_container').select('Name (A to Z)');
}
}
export default sortingPage