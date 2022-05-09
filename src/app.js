const express = require('express')
const { json } = require('body-parser')
const cors = require('cors')

const nomes = require('./routes/nomes')

const server = express()
const port = 3001

server.use(json())
server.use(cors())
server.use('/nomes', nomes)

server.listen(port, (req, res) => {
    console.log(`rodando na porta ${port}`)
})