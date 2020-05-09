const express = require('express');
require('./db/mongoose');
const userRouter = require('./routers/user');
const appointmentRouter = require('./routers/appointment');

const app = express();

//adding cors
let cors = require('cors');
app.use(
    cors({
        origin: 'http://localhost:3000',
        credentials: true,
    })
);

app.use(express.json());
app.use(userRouter);
app.use(appointmentRouter);

module.exports = app;
