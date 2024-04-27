const Contact = require('../models/contactModel')

const createContact = async (req, res) => {
    try {
        const { name, email, mobile, message, posted_date } = req.body;
        const contact = new Contact({ name, email, mobile, message, posted_date })
        await contact.save()
        res.status(201).json(contact)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getAllContact = async (req, res) => {
    try {
        const contact = await Contact.find()
        res.status(200).json(contact)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    createContact,
    getAllContact
}