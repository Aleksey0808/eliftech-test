const validateBody = require('./validateBody')
const presenceBody = require('./presenceBody')
const isValidId = require('./isValidId')

const ctrlWrapper = require('../middleWares/ctrlWrapper')

module.exports = {
  validateBody,
  ctrlWrapper,
  presenceBody,
  isValidId,
}
