const express = require('express');
const router = express.Router();
const metaController = require('../controllers/metaController');

router.post('/meta/create', metaController.createMeta);
router.get('/meta/', metaController.getMeta);
router.put('/meta/:slug', metaController.updateMeta);
router.delete('/meta/:slug', metaController.deleteMeta);

module.exports = router;
