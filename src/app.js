const express = require('express')
const { json } = require('body-parser')
const cors = require('cors')

const server = express()
const port = 3001

server.use(json())
server.use(cors())

let countIds = 0;
let nomes = [];

server.get('/', (req, res) =>{
    res.status(200).send(nomes)
})

server.post('/', (req, res) =>{
    const request = req.body

    const nomeObj = {
        id: countIds += 1,
        nome: request.nome
    }
    console.log(request.nome)
    nomes.push(nomeObj)
    res.status(201).send()
})

server.delete('/', (req, res) => {
    nomes = [];
    res.status(202).send()
})

server.put('/:id&:value', (req, res) => {
    const value = req.params.value
    const id = req.params.id
    console.log(`id = ${id} nome = ${value}`)

    nomes.map((nome) =>{
        if(nome.id == id){
            console.log(`novo valor no id ${id}`)
            nome.nome = value;
        }
    })
    res.status(200).send()
})

server.listen(port, (req, res) => {
    console.log(`rodando na porta ${port}`)
})