export class productPage{
    
    static add()
    {
        cy.get('.inventory_item').click();
    }
    static remove()
    {
        cy.get('.shopping_cart_link').click();
        cy.get('.cart_item').first().find('.cart_button').click();
        cy.get('.shopping_cart_badge').should('not.exist');
    }
    
}
export default productPage