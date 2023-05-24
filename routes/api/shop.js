const express = require('express')

const { validateBody, presenceBody, isValidId } = require('../../middleWares')

const schemas = require('../../schemas/shop')
const updateFavoriteSchema = require('../../schemas/shop')

const router = express.Router()

const ctrl = require('../../controllers/shop')

router.get('/', ctrl.getAll)

router.get('/:shopId', isValidId, ctrl.getById)

router.post('/', validateBody(schemas), ctrl.add)

router.put(
  '/:shopId',
  presenceBody,
  isValidId,
  validateBody(schemas),
  ctrl.updateById,
)

router.patch(
  '/:shopId/favorite',
  isValidId,
  validateBody(updateFavoriteSchema),
  ctrl.updateFavorite,
)

router.delete('/:shopId', ctrl.deleteById)

module.exports = router
