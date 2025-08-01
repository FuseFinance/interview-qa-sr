# Fuse QA Interview - Cypress E2E Testing Project

This is a Cypress E2E testing project set up for QA interview purposes.

## Prerequisites

- Node.js (version specified in `.nvmrc`)
- npm or yarn

## Setup

1. **Install Node.js version** (if using nvm):

   ```bash
   nvm use
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Open Cypress**:
   ```bash
   npm run cypress:open
   ```

## Available Scripts

- `npm run cypress:open` - Opens Cypress Test Runner in interactive mode
- `npm run cypress:run` - Runs Cypress tests in headless mode
- `npm run cypress:run:headless` - Runs Cypress tests in headless mode (alias)
- `npm run test` - Runs all tests
- `npm run test:open` - Opens Cypress Test Runner

## Project Structure

```
fuse-qa-interview/
├── cypress/
│   ├── e2e/           # Test specifications
│   ├── fixtures/      # Test data
│   ├── support/       # Support files and custom commands
│   ├── downloads/     # Downloaded files (gitignored)
│   ├── screenshots/   # Screenshots on failure (gitignored)
│   └── videos/        # Test recordings (gitignored)
├── cypress.config.js  # Cypress configuration
├── package.json       # Project dependencies and scripts
├── .nvmrc            # Node.js version specification
└── README.md         # This file
```

## Configuration

The project is configured with:

- Base URL: `https://dev.fusefinance.com`
- Viewport: 1280x720
- Video recording enabled
- Screenshots on failure enabled
- Custom timeouts for better reliability

## Custom Commands

The project includes several custom commands:

- `cy.waitForPageLoad()` - Waits for page to fully load
- `cy.clearSessionStorage()` - Clears session storage
- `cy.clearLocalStorage()` - Clears local storage
- `cy.clearAllStorage()` - Clears both session and local storage

## Getting Started

1. The project is configured to test against [Fuse Finance Dev Environment](https://dev.fusefinance.com/)
2. Run `npm run cypress:open` to open the Cypress Test Runner
3. Create your test files in the `cypress/e2e/` directory
4. Use the provided fixtures and custom commands as needed

## Best Practices

- Use descriptive test names
- Group related tests using `describe` blocks
- Use custom commands for common operations
- Keep tests independent and isolated
- Use fixtures for test data
- Follow the Page Object Model pattern for complex applications
