const express = require('express');
const { json } = require('body-parser');
const cors = require('cors');

const server = express();
const port = 3999;

server.use(json());
server.use(cors);

server.get('/', (req, res) =>{
    res.send("seja bem vindo :)");
})


server.listen(port, (req, res) => {
    console.log(`rodando na porta ${port}`);
})