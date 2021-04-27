const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');


const app = express();
mongoose.connect("mongodb://gustavo3848:12587@mongo_sistema:27017/mobile").then(function () {
    console.log("Conectado com o banco de dados...")
}).catch(function (erro) {
    console.log("Erro ao conectar com o bando de dados: " + erro)
});
app.use(express.json())   
app.use(routes)
const port = 3000;
app.listen(port, function () {
    console.log("Servidor rodando..." + "porta: " + port);
});