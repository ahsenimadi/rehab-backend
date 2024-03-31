const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

router.post('/blogs/create', blogController.createBlog);
router.get('/blogs', blogController.getAllBlog);
router.get('/blogs/:slug', blogController.getBlog);
router.put('/blogs/:slug', blogController.updateBlog);
router.delete('/blogs/:slug', blogController.deleteBlog);

module.exports = router;