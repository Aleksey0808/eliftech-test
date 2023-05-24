const { createError } = require('../helpers')

const presenceBody = (req, res, next) => {
  const shop = req.body
  if (Object.keys(shop).length === 0) {
    throw createError(400, 'missing fields')
  }
  next()
}

module.exports = presenceBody
