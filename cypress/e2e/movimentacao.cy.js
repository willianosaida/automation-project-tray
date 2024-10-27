
describe('Página de Movimentação', () => {
  beforeEach(() => {
    cy.login();
    cy.novaConta();
  });

  it('Deve cadastrar uma movimentação com sucesso', () => {
    cy.get('#tipo').select('Receita');
    cy.get('#data_transacao').type('20/10/2024');
    cy.get('#data_pagamento').type('19/10/2024');
    cy.get('#descricao').type('Pagamento Aluguel 09/2024');
    cy.get('#interessado').type('Willian Osaida');
    cy.get('#valor').type('1500');
    cy.get('#conta').select('Conta1');
    cy.get('#status_pago').check();
    cy.get('.btn').click();
    cy.contains('Movimentação adicionada com sucesso!').should('be.visible');
    cy.get(':nth-child(4) > a').click();
    cy.get('tbody > :nth-child(1) > :nth-child(1)').should('have.text', 'Pagamento Aluguel 09/2024');
    cy.get('tbody > :nth-child(1) > :nth-child(2)').should('have.text', '19/10/2024');
    cy.get('tbody > :nth-child(1) > :nth-child(3)').should('have.text', 'Conta1');
    cy.get('tbody > :nth-child(1) > :nth-child(4)').should('have.text', '1500.00');
    cy.get('tbody > :nth-child(1) > :nth-child(5)').should('have.text', 'Pago');
    });
  });

  