const Joi = require('joi')

const addSchema = Joi.object({
  name: Joi.string().required().messages({
    'any.required': 'missing required name field',
  }),
  favorite: Joi.boolean(),
})

const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required().messages({
    'any.required': 'missing fields favorite',
  }),
})

module.exports = {
  addSchema,
  updateFavoriteSchema,
}
