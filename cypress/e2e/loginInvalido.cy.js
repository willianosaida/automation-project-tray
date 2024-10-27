describe('Login com Senha Inválida', () => {
    it('Deve exibir erro com senha inválida', () => {
      cy.visit('https://seubarriga.wcaquino.me/login');
      cy.get('input[name="email"]').type('emailteste@example.com');
      cy.get('input[name="senha"]').type('senhaErrada');
      cy.get('button[type="submit"]').click();
      cy.contains('Problemas com o login do usuário').should('be.visible');
    });
  });
  