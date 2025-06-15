import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { board } from '../../pageObjects/PatientsBoard';

Given('I am on the Patients board', () => board.visit());
When('I search for {string}', (q: string) => board.search(q));
Then('I should see {string}', (name: string) =>
  board.cards().should('contain.text', name)
);
