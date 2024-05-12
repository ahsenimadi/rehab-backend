const mongoose = require('mongoose')

const studioSchema = new mongoose.Schema({
    title: String,
    description: String,
    image: String,
    short: String,
    meta_title: String,
    meta_description: String,
    meta_keywords: String,
    slug: String,
    posted_date: String
});

const Studio = mongoose.model('studio', studioSchema);

module.exports = Studio