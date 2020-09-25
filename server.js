const express = require('express');
const app = express();
const porta = 3000;
const estudantes = require('./estudantes.json')
const mulheres = require('./mulheresTec.json')

app.use(express.json());


app.get('/mulheres', function(requisicao, resposta){
  resposta.json(mulheres);
});

app.get('/mulheres/:id', function(requisicao, resposta){
  console.log(requisicao.params.id)
  const divasTecnologia = mulheres.find(mulher => mulher.id === parseInt(requisicao.params.id))
  console.log(divasTecnologia)
  resposta.json(divasTecnologia);
});


app.listen(porta, function(){

  console.log("Servidor rodando")
});