import './commands'

Cypress.Commands.add('login', () => {
  cy.visit('https://seubarriga.wcaquino.me/login');
  cy.get('input[name="email"]').type('emailteste3994@example.com');
  cy.get('input[name="senha"]').type('senha@123');
  cy.get('button[type="submit"]').click();
});


Cypress.Commands.add('novaConta', () => {
cy.get('.caret').click();
cy.get('.dropdown-menu > :nth-child(1) > a').click();
cy.get('#nome').type('Conta1');
cy.get('.btn').click();
cy.get(':nth-child(3) > a').click();
});

Cypress.Commands.add('getRequest', (url) => {
  cy.request({
    method: 'GET',
    url: url,
    failOnStatusCode: false
  }).then((response) => {
    return response;
  });
});


