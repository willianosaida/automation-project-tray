
describe('Cadastro de Novo Usuário', () => {
  it('Deve cadastrar um novo usuário com sucesso', () => {
    cy.visit('https://seubarriga.wcaquino.me/cadastro');
    cy.get('input[name="nome"]').type('Nome de Teste');
    cy.get('input[name="email"]').type('emailteste3994@example.com');
    cy.get('input[name="senha"]').type('senha@123');
    cy.get('.btn').click();
    cy.contains('Usuário inserido com sucesso').should('be.visible');
  });
});







