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

const add = async (req, res) => {
  console.log(req.body)
  const result = await Shop.create(req.body)
  res.status(201).json(result)
}

const updateById = async (req, res) => {
  const { shopId } = req.params
  const result = await Shop.findByIdAndUpdate(shopId, req.body, {
    new: true,
  })
  if (!result) {
    throw createError(404, 'Not found')
  }
  res.json(result)
}

const updateFavorite = async (req, res) => {
  const { shopId } = req.params
  const result = await Shop.findByIdAndUpdate(shopId, req.body, {
    new: true,
  })
  if (!result) {
    throw createError(404, 'Not found')
  }
  res.json(result)
}

const deleteById = async (req, res) => {
  const { shopId } = req.params
  const result = await Shop.findByIdAndDelete(shopId)
  if (!result) {
    throw createError(404, 'Not found')
  }
  res.json({
    message: 'Shop deleted',
  })
  res.json(result)
}

module.exports = {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  add: ctrlWrapper(add),
  updateById: ctrlWrapper(updateById),
  updateFavorite: ctrlWrapper(updateFavorite),
  deleteById: ctrlWrapper(deleteById),
}
