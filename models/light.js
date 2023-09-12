const { model, Schema } = require('mongoose')

const lightSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: false
  },
  image: {
    type: String,
    required: true
  },
  available: {
    type: Boolean,
    default: true
  },
  category: {
    type: String,
    required: true
  },
  subCategory: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: false
  },
  origin: {
    type: String,
    required: false
  },
  bulb: {
    type: String,
    required: false
  },
  lightColor: {
    type: String,
    required: false
  },
  features: {
    type: [String],
    required: false
  },
  faceType: {
    type: String,
    enum: ['glass', 'plastic'],
    default: 'plastic'
  }
})

module.exports = model('light', lightSchema)
