const { model, Schema } = require('mongoose')

const bodySchema = new Schema({
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
  features: {
    type: [String],
    required: false
  },
  condition: {
    type: String,
    enum: ['new', 'old'],
    required: false
  }
})

module.exports = model('bodyitem', bodySchema)
