import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { board } from '../../pageObjects/PatientsBoard';

Given('I open the language menu', () => board.openLangMenu());
When('I choose {string}', (label: string) => board.chooseLanguage(label));
Then('the UI appears in {string}', (lang: string) =>
  cy.get('body')
    .should('have.attr', 'lang')
    .and('include', lang.startsWith('P') ? 'pt' : 'en')
);
