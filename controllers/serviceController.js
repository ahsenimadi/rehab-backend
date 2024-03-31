const Service = require('../models/serviceModel')

const createService = async (req,res) => {
    try {
        const { title, description, image, thumbnail, short, slug, posted_date } = req.body
        const service = new Service({title, description, image, thumbnail, short, slug, posted_date})
        await service.save()
        res.status(201).json(service)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const getAllService = async (req,res) => {
    try {
        const services = await Service.find();
        res.status(200).json(services)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const getService = async (req,res) => {
    try {
        const service = await Service.findOne({slug:req.params.slug})
        if (!service) {
            return res.status(404).json({message: 'Service not found'})
        }
        res.status(200).json(service)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const updateService = async (req,res) => {
    try {
        const { title, description, image, thumbnail, short, slug } = req.body
        const service = await Service.findOne({slug: req.params.slug})
        if (!service) {
            return res.status(404).json({message: 'Service not found'})
        }
        service.title = title;
        service.description = description;
        service.image = image;
        service.thumbnail = thumbnail;
        service.short = short;
        service.slug = slug;
        await service.save()
        res.status(200).json(service)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const deleteService = async (req,res) => {
    try {
        const service = Service.findOne({slug: req.params.slug})
        if (!service) {
            return res.status(404).json({message: 'Service not found'})
        }
        await Service.findOneAndDelete({slug: req.params.slug})
        res.status(200).json({message: 'Service deleted successfully'})
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports = {
    createService,
    getAllService,
    getService,
    updateService,
    deleteService
}