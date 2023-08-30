const { model, Schema } = require('mongoose')

const scentSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: false
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
  fragrance: {
    type: String,
    required: false
  },
  color: {
    type: String,
    required: false
  }
})

module.exports = model('scent', scentSchema)
