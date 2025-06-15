import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { board } from '../../pageObjects/PatientsBoard';

Given('the API is offline', () =>
  cy.intercept('GET', '**/search**', { forceNetworkError: true })
);
When('I search for {string}', (q: string) => { board.visit(); board.search(q); });
Then('an error banner is displayed', () =>
  cy.contains('Connection lost').should('be.visible')
);
