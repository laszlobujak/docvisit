const express = require('express');
require('./db/mongoose');
const userRouter = require('./routers/user');
const appointmentRouter = require('./routers/appointment');

const app = express();

app.use(express.json());
app.use(userRouter);
app.use(appointmentRouter);

module.exports = app;
