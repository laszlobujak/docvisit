const express = require('express');
require('./db/mongoose');
const cors = require('cors');
const userRouter = require('./routers/user');
const appointmentRouter = require('./routers/appointment');

const app = express();

// adding cors
app.use(
  cors({
    origin: ['http://localhost:3000', 'https://docvisit-proj.herokuapp.com/'],
    credentials: true,
  })
);

app.use(express.json());
app.use(userRouter);
app.use(appointmentRouter);

module.exports = app;
