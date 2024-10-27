describe('Login com Sucesso', () => {
  it('Deve logar com sucesso', () => {
    cy.visit('https://seubarriga.wcaquino.me/login');
    cy.get('input[name="email"]').type('emailteste@example.com');
    cy.get('input[name="senha"]').type('senha123');
    cy.get('button[type="submit"]').click();
    cy.contains('Bem vindo').should('be.visible');
  });
});


