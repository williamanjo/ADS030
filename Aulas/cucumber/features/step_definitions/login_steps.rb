Dado('que o aluno deseja efetuar login') do
    visit 'http://localhost:3000/login'
end
  
Quando('o aluno informa a matricula {string} e a senha {string}') do |matricula, senha|
    fill_in 'matricula', with: matricula
    fill_in 'senha', with: senha
    click_button 'Entrar'
end
  
Então('deve ser exibido um(a) {string}') do |alert|
    page.find(alert)
end