var express = require('express');
var router = express.Router();

const alunosDB = require('../data/alunos.json');
var alunoLogado = null;

/* GET home page. */
router.get('/', function(req, res, next) {
  if (alunoLogado == null) {
    return res.redirect('/login');
  }

  res.render('index', { title: 'Aluno Online', aluno: alunoLogado });
});

/* GET login page. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Aluno Online', error: '' });
});

/* POST login form. */
router.post('/login', function(req, res, next) {
  var aluno = alunosDB.data.find(a => a.matricula === parseInt(req.body.matricula));
  
  if (aluno === undefined) {
    return res.render('login', { title: 'Aluno Online', error: 'Usuário não cadastrado!' });
  }

  if (aluno.senha !== Buffer.from(req.body.senha).toString('base64')) {
    return res.render('login', { title: 'Aluno Online', error: 'Senha inválida!' });
  }

  alunoLogado = aluno;

  res.redirect('/');
});

/* GET logout action. */
router.get('/logout', function(req, res, next) {
  alunoLogado = null;
  res.redirect('/login');
});

/* GET remember page. */
router.get('/remember', function(req, res, next) {
  res.send('Não implementado!');
});

module.exports = router;
