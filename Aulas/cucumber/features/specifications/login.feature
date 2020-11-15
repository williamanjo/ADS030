#language: pt

Funcionalidade: Login do Aluno Online

    Como aluno
    Quero acessar o Aluno Online
    Para consultar minhas notas e faltas.

    Cenário: Login inválido

        Dado que o aluno deseja efetuar login
        Quando o aluno informa a matricula '<matricula>' e a senha '<senha>'
        Então deve ser exibida a mensagem '<msg>'

        Exemplos:
            |matricula|senha|msg|
            |1|123|Senha incorreta, tente novamente!|
            |||Digite seu nÃºmero de matrÃ­cula!|