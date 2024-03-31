const mongoose = require('mongoose')

const serviceSchema = new mongoose.Schema({
    title:String,
    description:String,
    image:String,
    thumbnail:String,
    short:String,
    slug:String,
    posted_date:String
});

const Service = mongoose.model('service', serviceSchema);

module.exports = Service