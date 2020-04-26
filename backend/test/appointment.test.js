require('dotenv').config();
const supertest = require('supertest');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const { expect } = require('chai');
const app = require('../src/server');
const User = require('../src/models/User');
const Appointment = require('../src/models/Appointment');
const Doctor = require('../src/models/Doctor');

const userId = new mongoose.Types.ObjectId();
const user = {
  _id: userId,
  name: 'Patient',
  email: 'patient@example.com',
  password: 'patient!!',
  tokens: [
    {
      token: jwt.sign({ _id: userId }, process.env.JWT_TOKEN_SECRET)
    }
  ]
};

const userIdAnother = new mongoose.Types.ObjectId();
const userAnother = {
  _id: userIdAnother,
  name: 'Patient 2',
  email: 'patient2@example.com',
  password: 'patient2!!',
  tokens: [
    {
      token: jwt.sign({ _id: userIdAnother }, process.env.JWT_TOKEN_SECRET)
    }
  ]
};

const doctorId = new mongoose.Types.ObjectId();
const doctor = {
  _id: doctorId,
  name: 'Doctor',
  email: 'doctor@example.com',
  password: 'doctor!!',
  tokens: [
    {
      token: jwt.sign({ _id: doctorId }, process.env.JWT_TOKEN_SECRET)
    }
  ]
};

const appointment = {
  _id: new mongoose.Types.ObjectId(),
  description: 'First appointment',
  patient: user._id,
  doctor: doctor._id,
  date: new Date()
};

describe('Appointment tests', async () => {
  before(async () => {
    await User.deleteMany();
    await Doctor.deleteMany();
    await Appointment.deleteMany();
    await new User(user).save();
    await new Doctor(doctor).save();
    await new Appointment(appointment).save();
  });

  it('Should create a new appointment for user', async () => {
    const response = await supertest(app)
      .post('/appointments')
      .set('Authorization', `Bearer ${user.tokens[0].token}`)
      .send({
        description: 'Some description',
        doctor: doctor._id,
        date: new Date()
      })
      .expect(201);
    const newAppointment = await Appointment.findById(response.body._id);
    expect(newAppointment).not.to.be.null;
  });

  it('Should fetch users appointments', async () => {
    const response = await supertest(app)
      .get('/appointments')
      .set('Authorization', `Bearer ${user.tokens[0].token}`)
      .send()
      .expect(200);
    expect(response.body.length).to.equal(2);
  });

  it('Should not delete other users appointments', async () => {
    const response = await supertest(app)
      .delete('/appointments')
      .set('Authorization', `Bearer ${userAnother.tokens[0].token}`)
      .send();
    expect(404);
    const appointmentFromDb = await Appointment.findById(appointment._id);
    expect(appointmentFromDb).not.to.be.null;
  });
});
