/// <reference types="cypress" />

import { loginPage } from '../page-objects';


describe('Login', () => {
  before(() => {
    Cypress.session.clearAllSavedSessions();
  });

  it('should be able to login', () => {    
    loginPage.login();    
  });
});
