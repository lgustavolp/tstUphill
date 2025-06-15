import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { board } from '../../pageObjects/PatientsBoard';

Given('I am on the Patients board', () => board.visit());
When('I filter by status {string}', (s:string) => {
  board.openFilters(); board.selectStatus(s);
});
Then('only {string} cards are shown', (s:string) => {
  board.cards().each(($card) => {
    cy.wrap($card).contains(s);
  });
});
