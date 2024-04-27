const Meta = require('../models/metaModel');

const createMeta = async (req, res) => {
    try {
        const { page, meta_title, meta_description, meta_keywords } = req.body;
        if (!page || !meta_title || !meta_description || !meta_keywords) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        const meta = await Meta.create({ page, meta_title, meta_description, meta_keywords });
        res.status(201).json(meta);
    } catch (error) {
        console.error('Error creating metadata:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const getMeta = async (req, res) => {
    try {
        const meta = await Meta.find();
        res.status(200).json(meta);
    } catch (error) {
        console.error('Error fetching metadata:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const updateMeta = async (req, res) => {
    try {
        const { page, meta_title, meta_description, meta_keywords } = req.body;
        if (!page || !meta_title || !meta_description || !meta_keywords) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        const meta = await Meta.findByIdAndUpdate(req.params.id, { page, meta_title, meta_description, meta_keywords }, { new: true });
        if (!meta) {
            return res.status(404).json({ message: 'Metadata not found' });
        }
        res.status(200).json(meta);
    } catch (error) {
        console.error('Error updating metadata:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const deleteMeta = async (req, res) => {
    try {
        const meta = await Meta.findById(req.params.id);
        if (!meta) {
            return res.status(404).json({ message: 'Metadata not found' });
        }
        await meta.remove();
        res.status(200).json({ message: 'Metadata deleted successfully' });
    } catch (error) {
        console.error('Error deleting metadata:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = {
    createMeta,
    getMeta,
    updateMeta,
    deleteMeta
};
