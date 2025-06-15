
# UpHill Patients Journeys – E2E Test Suite (Cypress & Cucumber)

This repository contains an end-to-end (E2E) test suite for UpHill’s Patients Journeys web application.  
It uses Cypress for browser automation and the Cucumber (Gherkin) BDD syntax for writing tests in a business-readable format.  
The goal is to catch and prevent issues early by automating core user journeys and localization features.

## Architecture Overview

The test suite follows a Cypress + Cucumber architecture, separating the high-level test scenarios from the low-level automation code.  
Tests are written in Gherkin `.feature` files, and each step is implemented in a corresponding step definition file using Cypress commands.  
The cucumber preprocessor plugin is used to convert Gherkin scenarios into executable JavaScript for Cypress to run.

This allows us to write Given/When/Then scenarios in plain language while leveraging Cypress’s powerful automation under the hood.

### Key components and structure:

- **Feature files:** Located under `cypress/e2e/` (or a `features/` subfolder), containing scenarios in Gherkin syntax (e.g., `PatientsJourneys.feature`).
- **Step definitions:** Located under `cypress/support/step_definitions/` (or alongside the feature files), implemented in TypeScript/JavaScript. These use Cypress commands (`cy.get()`, `cy.click()`, etc.) to interact with the application under test.
- **Page objects/support commands:** Common selectors or actions can be abstracted in `cypress/support/` (e.g., `commands.ts`) to keep step definitions clean and DRY.
- **Cypress configuration:** `cypress.config.ts` defines test settings (such as `baseUrl` for the AUT, spec pattern to include `.feature` files, etc.) and integrates the Cucumber plugin (via `setupNodeEvents`).

### Diagram-style overview of the test architecture:

```
Feature Files (.feature Gherkin scenarios)
    │  (Given/When/Then steps in plain language)
    ▼
Cucumber Preprocessor Plugin
    │  (Converts .feature files to runnable tests)
    ▼
Step Definitions (TypeScript/JavaScript)
    │  (Glue code using Cypress API)
    ▼
Cypress Test Runner
    │  (Executes tests in a browser environment, headless in CI)
    ▼
Application Under Test (UpHill Patients Journeys UI)
```

This architecture enables a behavior-driven testing approach – tests are readable by non-engineers, and automation code remains maintainable.

## Quick Start

### Clone the repository and install dependencies:

```bash
git clone <repo-url>
cd <repo-folder>
npm install
```

### Configure test environment:

Ensure the target URL and credentials are set.  
By default, the tests use the QA environment provided by UpHill (baseUrl set in `cypress.config.ts`).  
Update `cypress.env.json` (or use environment variables) with any required credentials (e.g., login username/password).

## Run the tests:

### Smoke tests (fast, critical scenarios):

```bash
npm run test:ci
```
This will execute the suite with the `@smoke` tag (critical tests) in headless mode, suitable for CI.

### Full regression (all tests):

```bash
npm test
```
This runs the entire test suite in headless mode (for full regression).

### Open test runner (interactive):

```bash
npm run cypress:open
```
This opens the Cypress GUI for interactive test debugging.

## Continuous Integration

The project is integrated with **GitHub Actions CI/CD**.  
Workflow defined at `.github/workflows/cicd.yml`.

### Pipeline stages:

- **Smoke tests on PRs and main branch pushes:**  
Runs all `@smoke` scenarios for fast feedback before merging.

- **Nightly full regression:**  
Runs all scenarios (including `@regression` and untagged) every night.

- **Artifacts and reports:**  
Each CI run uploads screenshots, videos, and reports as GitHub Action artifacts for debugging failed tests.

---

Overall, this setup ensures high-quality coverage:  
**Fast feedback for developers**, **deep nightly regression**, and **easy traceability via BDD-readable scenarios and CI artifacts**.
