const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
      trim: true,
    },
    doctor: {
      type: String,
      required: true
    },
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    date: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;
