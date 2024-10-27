Feature: Cadastro de usuário
    Como um novo usuário
    Quero poder me cadastrar no sistema
    Para que eu possa acessar minha conta.

Scenario: Realizar cadastro com sucesso
Given que acesso a página de Novo Usuário
And digito um nome, email e senha válidos
When clico no botão de Cadastrar
Then deve ser exibida a mensagem de sucesso