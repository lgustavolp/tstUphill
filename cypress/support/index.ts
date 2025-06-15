import './commands';
import 'cypress-axe';

declare global {
  namespace Cypress {
	interface Chainable {
	  injectAxe(): Chainable<void>;
	  checkA11y(
		context?: any,
		options?: any,
		violationCallback?: (violations: any) => void,
		skipFailures?: boolean
	  ): Chainable<void>;
	}
  }
}

beforeEach(() => cy.injectAxe());
afterEach(() => cy.checkA11y(undefined, undefined, undefined, true));
