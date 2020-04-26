require('dotenv').config();
const express = require('express');
const Appointment = require('../models/Appointment');
const auth = require('../middleware/auth');

const router = new express.Router();

router.post('/appointments', auth, async (req, res) => {
  const appointment = new Appointment({
    ...req.body,
    patient: req.user.id,
  });
  try {
    await appointment.save();
    res.status(201).send(appointment);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/appointments', auth, async (req, res) => {
  try {
    await req.user
      .populate({
        path: 'appointments',
      })
      .execPopulate();
    res.send(req.user.appointments);
  } catch (error) {
    res.status(500).send(error);
  }
});

/* eslint-disable-next-line consistent-return */
router.get('/appointments/:id', auth, async (req, res) => {
  const _id = req.params.id;
  try {
    const appointment = await Appointment.findOne({
      _id,
      patient: req.user._id,
    });
    if (!appointment) {
      return res.status(404).send();
    }
    res.send(appointment);
  } catch (error) {
    res.status(500).send(error);
  }
});

/* eslint-disable-next-line consistent-return */
router.patch('/appointments/:id', auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['description', 'date'];
  const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid operation!' });
  }

  try {
    const appointment = await Appointment.findOne({
      _id: req.params.id,
      patient: req.user._id,
    });
    if (!appointment) {
      return res.status(404).send();
    }

    updates.forEach((update) => {
      appointment[update] = req.body[update];
    });
    await appointment.save();
    res.send(appointment);
  } catch (error) {
    res.status(400).send(error);
  }
});

/* eslint-disable-next-line consistent-return */
router.delete('/appointments/:id', auth, async (req, res) => {
  try {
    const appointment = await Appointment.findOneAndDelete({
      _id: req.params.id,
      patient: req.user._id,
    });

    if (!appointment) {
      return res.status(404).send();
    }

    res.send(appointment);
  } catch (error) {
    res.status(505).send();
  }
});

module.exports = router;
