Feature: Cadastro de fluxo de movimentação
    Como um usuário cadastrado
    Quero poder cadastrar uma movimentação
    Para que eu possa validar o fluxo completo e validar no extrato, a movimentação cadastrada.

Scenario: Realizar cadastro de movimentação
Dado que acesso a página de Movimentação
E cadastro uma movimentação
E faço um fluxo completo
Quando clicar em extrato
Então deve conter toda a movimentação cadastrada.