import { getGreeting } from '../support/app.po';

describe.only('xui', () => {
  let baseUrl = Cypress.env("baseUrl");
  let apiUrl = Cypress.env("localApi");
  beforeEach(() => {
    cy.visit(`${baseUrl}/`)});
  it('should display welcome message', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains('Welcome xui');
  });
});
