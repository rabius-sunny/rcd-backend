const express = require('express')
const bodyParser = require('body-parser')

const cors = require('cors')
const createRoute = require('./routes/create')
const connect = require('./config/connect')
const app = express()

// Middlewares
require('dotenv').config()
app.use(bodyParser.json())
app.use(cors())

// Connecting to mongodb database
connect()

// Routes
app.get('/checking', (req, res) => res.send('checking :: root route working'))
app.use('/rcd', createRoute)

const PORT = process.env.PORT || 6060

app.listen(PORT, () => console.log(`server is running on port= ${PORT}`))
