const supertest = require("supertest");
const app = require("../src/server");

/* 
    Create test database
*/
const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/endpoint_tests", {
    useUnifiedTopology: true,
    useCreateIndex: true,
    useNewUrlParser: true
});


/* Test flow 1:
    - auth error
    - create user
    - login with created user datas
    - update user datas
    - logout
*/

let generatedAuthTokenInFlow1 = "";
let testUser = {
    name: "Flow1 User",
    email: "test_flow10@gmail.com",
    password: 'test1111111'
}

describe("User tests", async () => {
     it("Expect status code 401 because of auth error", function (done) {
        supertest(app)
            .get("/users/me")
            .expect(401)
            .then( done())
            .catch(error => console.log(error))
    });

    it("it should return status code 201 and create user", function (done) {
         supertest(app)
            .post("/users")
            .send(testUser)
            .expect(201)
             .then(response => { generatedAuthTokenInFlow1 = response.body.token, done()})
            .catch(error => console.log(error))
    }).timeout(15000);

    it("it shoud return status code 200 and login user", function (done) {
         supertest(app)
            .post("/users/login")
            .send(testUser)
            .expect(200)
            .then(done())
            .catch(error => console.log(error))
    });

    it("it shoud return status code 200 and update user", function (done) {
         supertest(app)
            .patch("/users/me")
            .set('Authorization', 'Bearer ' + generatedAuthTokenInFlow1)
            .send({ name: "Modified name" })
            .expect(200)
            .then(done())
            .catch(error => console.log(error))
    });

    it("it shoud return status code 200 and logout user", function (done) {
        supertest(app)
            .post("/users/logout")
            .set('Authorization', 'Bearer ' + generatedAuthTokenInFlow1 )
            .send(testUser)
            .expect(200)
            .then(done())
            .catch(error => console.log(error))
    });
});


/* Test flow 2:
    - create user
    - delete user
*/

let generatedAuthTokenInFlow2 = "";
let testUser2 = {
    name: "Flow2 User",
    email: "test_flow2@gmail.com",
    password: 'test1111111'
}

describe("Create and delete user", async () => {
    it("it shoud return status code 201 and create user", function (done) {
         supertest(app)
            .post("/users")
            .send(testUser2)
            .expect(201)
             .then(response => { generatedAuthTokenInFlow2 = response.body.token, done() })
            .catch(error => console.log(error))
    }).timeout(15000);

    it("it shoud return status code 200 and delete user", function (done) {
         supertest(app)
            .delete("/users/me")
            .set('Authorization', 'Bearer ' + generatedAuthTokenInFlow2)
            .send(testUser2)
            .expect(200)
            .then(done())
            .catch(error => console.log(error))
    });
});


