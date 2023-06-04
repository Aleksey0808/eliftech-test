const express = require('express')

const { validateBody, presenceBody, isValidId } = require('../../middleWares')

const { addSchema, updateFavoriteSchema } = require('../../schemas/shop')

const router = express.Router()

const ctrl = require('../../controllers/shop')

router.get('/', ctrl.getAll)

router.get('/:shopId', isValidId, ctrl.getById)

module.exports = router
