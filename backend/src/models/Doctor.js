const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

doctorSchema.virtual('appointments', {
  ref: 'Appointment',
  localField: '_id',
  foreignField: 'doctor',
});

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;
