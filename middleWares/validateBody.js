const { createError } = require('../helpers')

const validateBody = (schema) => {
  const func = async (req, res, next) => {
    const { error } = schema.validate(req.body)
    if (error) {
      let shopField = error.message.split(' ')
      shopField = `missing required ${shopField[2]} field`

      next(createError(400, shopField))
    }
    next()
  }
  return func
}

module.exports = validateBody
