const { model, Schema } = require('mongoose')

const nickelSchema = new Schema({
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
  origin: {
    type: String,
    required: false
  },
  features: {
    type: [String],
    required: false
  }
})

module.exports = model('nickel', nickelSchema)
