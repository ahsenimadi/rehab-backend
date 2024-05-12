const express = require('express')
const router = express.Router()
const studioController = require('../controllers/studioController')
const upload = require('../middleware/upload');

router.post('/studios/create', upload.single('image'), studioController.createStudio)
router.get('/studios', studioController.getAllStudio)
router.get('/studios/home', studioController.getLimitedStudios)
router.get('/studios/:slug', studioController.getStudio)
router.put('/studios/:slug', upload.single('image'), studioController.updateStudio)
router.delete('/studios/:slug', studioController.deleteStudio)

module.exports = router