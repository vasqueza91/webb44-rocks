require('dotenv').config() // This allows to "inject" fake environment variables


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

server.listen(process.env.PORT || 5000, () => {
    console.log(`listening on ${process.env.PORT || 5000}`)
})