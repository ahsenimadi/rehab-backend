const Blog = require('../models/blogModel');

const createBlog = async (req, res) => {
    try {
        const { title, description, image, slug, posted_date } = req.body;
        const blog = new Blog({title, description, image, slug, posted_date});
        await blog.save();
        res.status(201).json(blog);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const getAllBlog = async (req, res) => {
    try {
        const blogs = await Blog.find()
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const getBlog = async (req, res) => {
    try {
        const blog = await Blog.findOne({slug: req.params.slug})
        if (!blog) {
            return res.status(404).json({message: 'Blog not found'})
        }
        res.status(200).json(blog);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const updateBlog = async (req, res) => {
    try {
        const { title, description, image, slug } = req.body;
        const blog = await Blog.findOne({slug: req.params.slug})
        if (!blog) {
            return res.status(404).json({message: 'Blog not found'})
        }
        blog.title = title;
        blog.description = description;
        blog.image = image;
        blog.slug = slug;
        await blog.save();
        res.status(200).json(blog);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const deleteBlog = async (req, res) => {
    try {
        const blog = await Blog.findOne({slug: req.params.slug})
        if (!blog) {
            return res.status(404).json({message: 'Blog not found'})
        }
        await Blog.findOneAndDelete({slug: req.params.slug});
        res.status(200).json({message: 'Blog deleted successfully'});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports = {
    createBlog,
    getAllBlog,
    getBlog,
    updateBlog,
    deleteBlog
}