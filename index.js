require('dotenv').config() // This allows to "inject" fake environment variables

const { PORT } = require('./config')

const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const server = express()

server.use(express.json())
server.use(cors())
server.use(helmet())

server.get('/', (req, res) => {
    res.send(`
    <h1>Webb 44 Is Awesome!</h1>
    `)
})

server.use('*', (req, res, next) => {
    res.json({
        message: 'web 44 is awesome indeed'
    })
})

server.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})