const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const express = require('express');
const router = new express.Router();

const options = {
    swaggerDefinition: {
      openapi: "3.0.0",
      info: {
        title: "DocVisit Documentation",
        version: "1.0.0",
        description:
          "DocVisit is a web-based React and NodeJS powered online doctor appointment maker. ",
        license: {
          name: "MIT",
          url: "https://choosealicense.com/licenses/mit/"
        },
        contact: {
          name: "DocVisitTeam",
          url: "http://localhost:8000/",
          email: "info@docvisit.com"
        }
      },
      servers: [
        {
          url: "http://localhost:8000/"
        }
      ]
    },
    apis: ['src/models/User.js', 'src/models/Doctor.js', 'src/models/Appointment.js',
            'src/routers/appointment.js', 'src/routers/user.js']
  };

  const specs = swaggerJsdoc(options);
  router.use("/docs", swaggerUi.serve);
  router.get(
    "/docs",
    swaggerUi.setup(specs, {
      explorer: false
    })
  );

  module.exports = router;
