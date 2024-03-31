const Appointment = require('../models/appointmentModel')

const createAppointment = async (req,res) => {
    try {
        const { name, email, mobile, service, posted_date } = req.body;
        const appointment = new Appointment({ name, email, mobile, service, posted_date })
        await appointment.save()
        res.status(201).json(appointment)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const getAllAppointment = async (req,res) => {
    try {
        const appointment = await Appointment.find()
        res.status(200).json(appointment)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports = {
    createAppointment,
    getAllAppointment
}