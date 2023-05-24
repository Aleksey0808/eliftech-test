const { Schema, model } = require('mongoose')
const { handleMongooseError } = require('../helpers')

const shopSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Set name for shop'],
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
)

shopSchema.post('save', handleMongooseError)

const Shop = model('shop', shopSchema)

module.exports = Shop
