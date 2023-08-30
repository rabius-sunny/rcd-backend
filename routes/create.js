const app = require('express')
const { createItem } = require('../controllers/create')
const createRoute = app.Router()

createRoute.post('/create', createItem)

module.exports = createRoute
