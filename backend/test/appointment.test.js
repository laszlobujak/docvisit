const supertest = require("supertest");
const app = require("../src/server");
const mongoose = require('mongoose');
const Appointment = require('../src/models/Appointment');


/* Test flow:
    - auth error
    - create appointment
    - get appointment
    - update appointment datas
    - delete
*/
let generatedAuthTokenInFlow = "";
let testAppointment = {
    description: "Flow3 Appointment",
    doctor: "Doctor Flow3",
    patient: 'Flow3pationt',
    date: '2020.04.12.'
}

describe("Appointment tests", async () => {
    before(async () => {
        await Appointment.deleteMany();
      });

    it("Expect status code 401 because of auth error", function (done) {
       supertest(app)
           .get("/appointments/:id")
           .expect(401)
           .end(done)
    });


    it("it shoud return status code 201 and create appointment", function (done) {
        supertest(app)
            .post("/appointments")
            .set('Authorization', 'Bearer ' + generatedAuthTokenInFlow)
            .send(testAppointment)
            .expect(201)
            .end( (req, res) => {
                generatedAuthTokenInFlow3 = res.body.token,
                done();
            });
    }).timeout(15000);

    it("it should return the testappointment", function (done) {
        supertest(app)
            .get("/appointments")
            .set('Authorization', 'Bearer ' + generatedAuthTokenInFlow)
            .expect(testAppointment)
            .end(done)
    });

    it("it shoud return the 200 and update appointment", function (done) {
        supertest(app)
            .patch("/appointments/:id")
            .set('Authorization', 'Bearer ' + generatedAuthTokenInFlow)
            .send({ description : "Modified description"})
            .expect(200)
            .end(done)
    });

    it("it shoud return status code 200 and delete appointment", function (done) {
        supertest(app)
            .delete("/appointments/:id")
            .set('Authorization', 'Bearer ' + generatedAuthTokenInFlow)
            .send(testAppointment)
            .expect(200)
            .end(done);
    });
});
