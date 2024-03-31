const express = require('express')
const router = express.Router()
const serviceController = require('../controllers/serviceController')

router.post('/services/create', serviceController.createService)
router.get('/services', serviceController.getAllService)
router.get('/services/:slug', serviceController.getService)
router.put('/services/:slug', serviceController.updateService)
router.delete('/services/:slug', serviceController.deleteService)

module.exports = router