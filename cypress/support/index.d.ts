/// <reference types="cypress" />

declare global {
  namespace Cypress {
    interface Chainable<Subject> {
      waitForPageLoad(): Chainable<Subject>
      clearSessionStorage(): Chainable<Subject>
      clearLocalStorage(): Chainable<Subject>
      clearAllStorage(): Chainable<Subject>
    }
  }
}

export {} 