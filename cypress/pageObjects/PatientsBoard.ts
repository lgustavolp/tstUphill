// cypress/pageObjects/PatientsBoard.ts
export class PatientsBoard {
  visit() {
    cy.loginByApi();           // custom command – autentica e, depois:
    cy.visit('/patients');     // rota da board
  }

  /** UI -- filtros *******************************************************/
  openFilters() {
    cy.getByCy('more-filters-btn').click();
  }
  selectStatus(status: string) {
    cy.getByCy('status-dropdown').click();
    cy.contains('li', status).click();
  }

  /** UI -- busca *********************************************************/
  search(query: string) {
    cy.getByCy('search-input').clear().type(query);
  }

  /** UI -- linguagem *****************************************************/
  openLangMenu() {
    cy.getByCy('user-menu').click();
  }
  chooseLanguage(label: string) {
    cy.contains('li', label).click();
  }

  /** Element helpers *****************************************************/
  cards() {
    return cy.getByCy('journey-card');
  }
}

export const board = new PatientsBoard();
