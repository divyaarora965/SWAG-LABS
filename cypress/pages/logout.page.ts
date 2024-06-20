export class LogoutPage{

static logout(){
    cy.get('#logout_sidebar_link').click();
}
}
export default LogoutPage