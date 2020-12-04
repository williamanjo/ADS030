#language: pt

Funcionalidade: Login do Aluno Online

    Como aluno
    Quero acessar o Aluno Online
    Para consultar minhas notas e faltas.

    Cenário: Login inválido

        Dado que o aluno deseja efetuar login
        Quando o aluno informa a matricula '<matricula>' e a senha '<senha>'
        Então deve ser exibido um '<alert>'

        Exemplos:
            |matricula|senha|alert|
            |1|123|#alert|
            |1|123|.navbar|
            |2020100|senha123|.navbar|
            |2020100|senha123|#alert|