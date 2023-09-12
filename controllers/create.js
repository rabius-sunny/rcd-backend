const bodyaccessories = require('../models/bodyaccessories')
const bodyitem = require('../models/bodyitem')
const electronics = require('../models/electronics')
const interior = require('../models/interior')
const light = require('../models/light')
const lookingmirror = require('../models/lookingmirror')
const nickel = require('../models/nickel')
const player = require('../models/player')
const scent = require('../models/scent')
const sound = require('../models/sound')

const createItem = async (req, res) => {
  let response

  try {
    switch (req.body.category) {
      case 'lights':
        response = await light.create(req.body)
        break
      case 'body':
        response = await bodyitem.create(req.body)
        break
      case 'bodyaccessories':
        response = await bodyaccessories.create(req.body)
        break
      case 'electronics':
        response = await electronics.create(req.body)
        break
      case 'interior':
        response = await interior.create(req.body)
        break
      case 'lookingmirror':
        response = await lookingmirror.create(req.body)
        break
      case 'nickel':
        response = await nickel.create(req.body)
        break
      case 'player':
        response = await player.create(req.body)
        break
      case 'scent':
        response = await scent.create(req.body)
        break
      case 'sound':
        response = await sound.create(req.body)
        break

      default:
        throw new Error(`Invalid type: ${req.body.category}`)
    }

    res.status(200).json({ message: 'ok' })
  } catch (error) {
    res.status(404).json({ error, message: error.message })
  }
}

module.exports = { createItem }
