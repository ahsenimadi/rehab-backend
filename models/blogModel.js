const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    title:String,
    description:String,
    image:String,
    slug:String,
    posted_date:String
});

const Blog = mongoose.model('Blog', blogSchema)

module.exports = Blog;