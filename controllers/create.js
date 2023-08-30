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
  const { type, ...body } = req.body

  let response

  try {
    switch (type) {
      case 'light':
        response = await light.create(body)
        break
      case 'body':
        response = await bodyitem.create(body)
        break
      case 'bodyaccessories':
        response = await bodyaccessories.create(body)
        break
      case 'electronics':
        response = await electronics.create(body)
        break
      case 'interior':
        response = await interior.create(body)
        break
      case 'lookingmirror':
        response = await lookingmirror.create(body)
        break
      case 'nickel':
        response = await nickel.create(body)
        break
      case 'player':
        response = await player.create(body)
        break
      case 'scent':
        response = await scent.create(body)
        break
      case 'sound':
        response = await sound.create(body)
        break

      default:
        throw new Error(`Invalid type: ${type}`)
    }

    res.status(200).json({ message: 'ok' })
  } catch (error) {
    res.status(404).json({ error, message: error.message })
  }
}

module.exports = { createItem }
