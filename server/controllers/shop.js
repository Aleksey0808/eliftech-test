const Shop = require('../models/shop')

const { createError } = require('../helpers')
const { ctrlWrapper } = require('../middleWares')

const getAll = async (req, res) => {
  const result = await Shop.find()
  res.json(result)
}

const getById = async (req, res) => {
  const { shopId } = req.params
  const result = await Shop.findById(shopId)
  if (!result) {
    throw createError(404, 'Not found')
  }
  res.json(result)
}

module.exports = {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
}
