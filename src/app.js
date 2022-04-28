const express = require('express')
const { json } = require('body-parser')
const cors = require('cors')

const server = express()
const port = 3001

server.use(json())
server.use(cors())

let nomes = [];

server.get('/', (req, res) =>{
    res.status(200).send(nomes)
})

server.post('/', (req, res) =>{
    const resquest = req.body
    console.log(resquest.nome)
    nomes.push(resquest.nome)
    res.status(201).send()
})

server.delete('/', (req, res) => {
    nomes = [];
    res.status(202).send()
})

server.listen(port, (req, res) => {
    console.log(`rodando na porta ${port}`)
})