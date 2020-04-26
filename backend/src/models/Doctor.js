const mongoose = require('mongoose');

/**
 * @swagger
 *  components:
 *    schemas:
 *      Doctors:
 *        type: object
 *        required:
 *          - name
 *        properties:
 *          name:
 *            type: string
 *        example:
 *           name: Dr Test           
 */

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

doctorSchema.virtual('appointments', {
  ref: 'Appointment',
  localField: '_id',
  foreignField: 'doctor',
});

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;
