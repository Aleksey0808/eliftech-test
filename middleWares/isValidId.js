const { isValidObjectId } = require('mongoose')
const { createError } = require('../helpers')

const isValidId = (req, res, next) => {
  const { shopId } = req.params
  if (!isValidObjectId(shopId)) {
    next(createError(400, `${shopId} is not valid id`))
  }
  next()
}

module.exports = isValidId
