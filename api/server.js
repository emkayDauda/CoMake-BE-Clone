const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const auth = require('../auth/authRouter')

const server = express()

server.use(express.json())
server.use(cors())
server.use(helmet())

server.use('/api/auth', auth)

server.get('/', (req, res) => {
    res.status(200).json({api: 'le up'})
})

module.exports = server