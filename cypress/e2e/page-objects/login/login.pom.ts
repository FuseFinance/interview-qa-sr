import { LocalStorageKeys } from './login.constants';
import { LoginLocators } from './login.locators';

class LoginPage {
  username: string;
  password: string;
  applicationUrl: string;
  domain: string;

  constructor() {
    this.applicationUrl = Cypress.env('application_url');
    this.domain = Cypress.env('auth0_domain');
    this.username = Cypress.env('auth0_username');
    this.password = Cypress.env('auth0_password');
  }

  login = () => {
    try {
      cy.session(
        `login`,
        () => {
          const { applicationUrl, password, username } = this;
          cy.visit(applicationUrl);

          cy.get(LoginLocators.userNameInput).type(username);
          cy.get(LoginLocators.passwordInput).type(password, {
            log: false,
          });
          cy.contains(LoginLocators.continueButton, 'Continue').click({
            force: true,
          });
        },
        {
          validate: () => {
            cy.wrap(localStorage)
                .invoke('getItem', LocalStorageKeys.AccessToken)
                .should('exist');
            Cypress.on('uncaught:exception', (err, runnable) => {
              if (err.message.includes('Missing clientKey')) {                
                return false
              }
            });
          },
          cacheAcrossSpecs: true,
        },
      );
    } catch (error) {
      cy.log(error as string);
    }
  };  
}

export const loginPage = new LoginPage();
