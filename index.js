const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = 3000;
const mensagens = [] //array que irá conter as mensagens

app.use(bodyParser.json());

app.get('/', function(req,res) {
    res.send('Rota GET OK');
});

// Mostra todas as mensagens salvas no array 
app.get('/mensagem', function (req,res) {
    res.send(mensagens);
});

// Insere nova mensagem no array
app.post('/mensagem', function (req,res) {
    const mensagem_recebida = req.body.mensagem;   // Espera-se receber na rquisição um campo/key chamado "mensagem"
    mensagens.push(mensagem_recebida);
    res.send('Mensagem adicionada com Sucesso!');
});

app.listen(port, function() {
    console.log('App rodando na porta : ' + port)
});