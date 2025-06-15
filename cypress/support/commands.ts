Cypress.Commands.add('loginByApi', () => {
  cy.request('POST', '/api/login', { user: 'qa', pass: 'qa' })
    .its('body.token').then(t => window.localStorage.setItem('token', t));
});

Cypress.Commands.add('getByCy', (sel:string) =>
  cy.get(`[data-cy=${sel}]`)
);
