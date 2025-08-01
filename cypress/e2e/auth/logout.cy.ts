/// <reference types="cypress" />

import { sidebarMenu, loginPage } from '../page-objects';

describe('Logout', { testIsolation: false }, () => {
  before(() => {
    Cypress.session.clearAllSavedSessions();
  });

  it('should be able to logout', () => {
    loginPage.login();
    sidebarMenu.clickOnLogout();
    sidebarMenu.shouldNotBeLogged();
  });
});
