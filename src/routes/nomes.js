const express = require('express')
const router = express.Router()

let countIds = 0;
let nomes = [];

router.get('/', (req, res) =>{
    res.status(200).send(nomes)
})

router.get('/:id', (req, res) =>{
    const id = req.params.id
    const nomesObj = nomes.filter(nome => nome.id == id)
    res.status(200).send(nomesObj)
})

router.post('/', (req, res) =>{
    const request = req.body

    const nomeObj = {
        id: countIds += 1,
        nome: request.nome
    }
    console.log(request.nome)
    nomes.push(nomeObj)
    res.status(201).send()
})

router.delete('/', (req, res) => {
    nomes = [];
    res.status(202).send()
})

router.delete('/:id', (req, res) => {
    const id = req.params.id

    listaFiltrada = nomes.filter(nome => nome.id != id)
    nomes = listaFiltrada
    res.status(202).send()
})

router.put('/:id&:value', (req, res) => {
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

module.exports = router;