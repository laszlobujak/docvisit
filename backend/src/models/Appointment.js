const mongoose = require('mongoose');

/**
 * @swagger
 *  components:
 *    schemas:
 *      Appointment:
 *        type: object
 *        required:
 *          - description
 *          - doctor
 *          - patient
 *          - date
 *        properties:
 *          description:
 *            type: string
 *          doctor:
 *            type: Doctor - object
 *          patient:
 *            type: User - object
 *          date:
 *            type: date
 * 
 *        example:
 *           description: Fever
 *           doctor: Dr. Test
 *           patient: Sick Person
 *           date: 2020-01-01
 */

const appointmentSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
      trim: true
    },
    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Doctor'
    },
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    },
    date: {
      type: Date,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;
