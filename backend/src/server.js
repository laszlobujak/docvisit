const express = require('express');
require('./db/mongoose');
const cors = require('cors');
const userRouter = require('./routers/user');
const appointmentRouter = require('./routers/appointment');

const app = express();

// adding cors
app.use(cors());

app.use(express.json());
app.use(userRouter);
app.use(appointmentRouter);

module.exports = app;
