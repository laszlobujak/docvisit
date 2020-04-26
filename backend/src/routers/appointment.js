require('dotenv').config();
const express = require('express');
const Appointment = require('../models/Appointment');
const auth = require('../middleware/auth');

const router = new express.Router();
/**
 * @swagger
 * tags:
 *   name: Appointment
 *   description: Appointment management
 */
/**
 * @swagger
 * path:
 *  /appointments:
 *    post:
 *      summary: Create a new appointment
 *      tags: [Appointment]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Appointment'
 *      responses:
 *        "201":
 *          description: An appointment schema
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Appointment'
 */
router.post('/appointments', auth, async (req, res) => {
  const appointment = new Appointment({
    ...req.body,
    patient: req.user.id
  });
  try {
    await appointment.save();
    res.status(201).send(appointment);
  } catch (error) {
    res.status(400).send(error);
  }
});
/**
 * @swagger
 * path:
 *  /appointments:
 *    get:
 *      summary: Get appointments
 *      tags: [Appointment]
 */
router.get('/appointments', auth, async (req, res) => {
  try {
    await req.user
      .populate({
        path: 'appointments'
      })
      .execPopulate();
    res.send(req.user.appointments);
  } catch (error) {
    res.status(500).send(error);
  }
});
/**
 * @swagger
 * path:
 *  /appointments/:id:
 *    get:
 *      summary: Get an appointment by id
 *      tags: [Appointment]
 *      parameters:
 *        - in: path
 *          name: appointmentId
 *          schema:
 *            type: int
 *          required: true
 *          description: Id of the appointment
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Appointment'
 */
router.get('/appointments/:id', auth, async (req, res) => {
  const _id = req.params.id;
  try {
    const appointment = await Appointment.findOne({
      _id,
      patient: req.user._id
    });
    if (!appointment) {
      return res.status(404).send();
    }
    res.send(appointment);
  } catch (error) {
    res.status(500).send(error);
  }
});
/**
 * @swagger
 * path:
 *  /appointments/:id:
 *    patch:
 *      summary: Update an existing appointment
 *      tags: [Appointment]
 *      parameters:
 *        - in: path
 *          name: appointmentId
 *          schema:
 *            type: int
 *          required: true
 *          description: Id of the appointment
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Appointment'
 *      responses:
 *        "201":
 *          description: An appointment schema
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Appointment'
 */
router.patch('/appointments/:id', auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['description', 'date'];
  const isValidOperation = updates.every(update =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid operation!' });
  }

  try {
    const appointment = await Appointment.findOne({
      _id: req.params.id,
      patient: req.user._id
    });
    if (!appointment) {
      return res.status(404).send();
    }

    updates.forEach(update => {
      appointment[update] = req.body[update];
    });
    await appointment.save();
    res.send(appointment);
  } catch (error) {
    res.status(400).send(error);
  }
});
/**
 * @swagger
 * path:
 *  /appointments/:id:
 *    delete:
 *      summary: Delete an appointment by id
 *      tags: [Appointment]
 *      parameters:
 *        - in: path
 *          name: appointmentId
 *          schema:
 *            type: int
 *          required: true
 *          description: Id of the appointment
 */
router.delete('/appointments/:id', auth, async (req, res) => {
  try {
    const appointment = await Appointment.findOneAndDelete({
      _id: req.params.id,
      patient: req.user._id
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
