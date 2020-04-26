const express = require('express');
require('./db/mongoose');
const userRouter = require('./routers/user');
const appointmentRouter = require('./routers/appointment');
const swaggerDoc = require('./swaggerDoc')


const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const app = express();

app.use(express.json());
app.use(userRouter);
app.use(appointmentRouter);
app.use(swaggerDoc)


module.exports = app;
