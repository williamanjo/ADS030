Dado('que o aluno deseja efetuar login') do
    visit 'http://online.iesb.br/aonline/logon.asp'
end
  
Quando('o aluno informa a matricula {string} e a senha {string}') do |matricula, senha|
    fill_in 'txtnumero_matricula', with: matricula
    fill_in 'txtsenha_tac', with: senha
    click_button 'Entrar'
end
  
Então('deve ser exibida a mensagem {string}') do |msg|    
    page.accept_alert(msg)
end