const express = require('express');
const AppointmentRouter = express.Router();
const Appointment = require('../models/Appointment')

AppointmentRouter.route('/create').post(function(req, res){
    const appointment = new Appointment(req.body);
    appointment.save()
        .then(appointment => {
            res.json('Appointment added successfully');
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
          });
});

module.exports = AppointmentRouter