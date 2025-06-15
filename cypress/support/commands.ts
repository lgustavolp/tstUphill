// Extend Cypress' Chainable interface to include custom commands
declare global {
  namespace Cypress {
    interface Chainable {
      loginByApi(): Chainable<void>;
      getByCy(sel: string): Chainable<JQuery<HTMLElement>>;
    }
  }
}

Cypress.Commands.add('loginByApi', () => {
  cy.request('POST', '/api/login', { user: 'qa', pass: 'qa' })
    .its('body.token').then(t => window.localStorage.setItem('token', t));
});

Cypress.Commands.add('getByCy', (sel:string) =>
  cy.get(`[data-cy=${sel}]`)
);

export {};
