import { SidebarMenuLocators } from './SidebarMenu.locators';


class SidebarMenu {
  applicationUrl: string;
  constructor() {    
    this.applicationUrl = Cypress.env('application_url');
  }
  
  clickOnLogout = () => {
    try {
      cy.get(SidebarMenuLocators.logout).click();
    } catch (error) {
      cy.log(error);
    }
  };

  shouldNotBeLogged = () => {
    cy.url().should('not.equal', this.applicationUrl);
  };
}

export const sidebarMenu = new SidebarMenu();
