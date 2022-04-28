const express = require('express')
const { json } = require('body-parser')
const cors = require('cors')

const server = express()
const port = 3001

server.use(json())
server.use(cors())

server.get('/', (req, res) =>{
    res.send("seja bem vindo")
})

server.post('/', (req, res) =>{
    const resquest = req.body
    console.log(resquest.nomes)
    res.status(201).send()
})

server.listen(port, (req, res) => {
    console.log(`rodando na porta ${port}`)
})