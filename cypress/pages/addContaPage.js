class AddContaPage {
    visit() {
      cy.visit('https://seubarriga.wcaquino.me/addConta');
    }
  
    enterNome(conta1) {
      cy.get('#nome').type(conta1);
    }
  
    clickSalvar() {
      cy.get('.btn').click();
    }
  
    clickHome() {
      cy.get('a:contains("Home")').click();
    }
  
    clickContas() {
      cy.get('a:contains("Contas")').click();
    }
  
    clickCriarMovimentacao() {
      cy.get('a:contains("Criar Movimentação")').click();
    }
  
    clickResumoMensal() {
      cy.get('a:contains("Resumo Mensal")').click();
    }
  
    clickSair() {
      cy.get('a:contains("Sair")').click();
    }
  }
  
  export default new AddContaPage();
  