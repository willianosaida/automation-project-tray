Feature: Login com senha inválida
    Como um usuário cadastrado
    Quero digitar uma senha inválida
    Para que eu possa validar impedimento de acesso com senha inválida.

Cenario: Tentativa de login com senha inválida
Dado que acesso a página de Login
E digito o email recém cadastrado
E uma senha inválida
Quando clico no botão de Entrar
Então deve ser exibida a mensagem de erro



Feature: Login com sucesso
    Como um usuário cadastrado
    Quero poder realizar o login com sucesso
    Para que eu possa acessar o sistema.

Cenario: Realizar login com sucesso
Dado que acesso a página de Login
E digito o email recém cadastrado
E a senha válida
Quando clico no botão de Entrar
Então deve ser exibida a mensagem de Bem vindo