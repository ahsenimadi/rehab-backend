const express = require('express')
const router = express.Router()
const serviceController = require('../controllers/serviceController')
const upload = require('../middleware/upload');

router.post('/services/create', upload.single('image'), serviceController.createService)
router.get('/services', serviceController.getAllService)
router.get('/services/home', serviceController.getSixServices)
router.get('/services/:slug', serviceController.getService)
router.put('/services/:slug', upload.single('image'), serviceController.updateService)
router.delete('/services/:slug', serviceController.deleteService)

module.exports = router