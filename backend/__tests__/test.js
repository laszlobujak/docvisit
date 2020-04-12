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

describe("Auth eror on : GET /users/me", function () {
    it("it should has status code 401 because of auth error", function (done) {
        supertest(app)
            .get("/users/me")
            .expect(401)
            .end(function (err, res) {
                if (err) done(err);
                done();
            });
    });
});

describe("Success create on : POST /users", function () {
    it("it shoud return status code 201 and create user", function (done) {
        supertest(app)
            .post("/users")
            .send(testUser)
            .expect(201)
            .end(function (err, res) {
                generatedAuthTokenInFlow1 = res.body.token
                if (err) done(err);
                done();
            });
    });
});

describe("Success login on : POST /users/login", function () {
    it("it shoud return status code 200 and login user", function (done) {
        supertest(app)
            .post("/users/login")
            .send(testUser)
            .expect(200)
            .end(function (err, res) {
                if (err) done(err);
                done();
            });
    });
});

describe("Success update on : PATCH /users/me", function () {
    it("it shoud return status code 200 and update user", function (done) {
        supertest(app)
            .patch("/users/me")
            .set('Authorization', 'Bearer ' + generatedAuthTokenInFlow1) 
            .send({ name : "Modified name"})
            .expect(200)
            .end(function (err, res) {
                if (err) done(err);
                done();
            });
    });
});


describe("Success logout on : POST /users/logout", function () {
    it("it shoud return status code 200 and logout user", function (done) {
        supertest(app)
            .post("/users/login")
            .set('Authorization', 'Bearer ' + generatedAuthTokenInFlow1 ) 
            .send(testUser)
            .expect(200)
            .end(function (err, res) {
                if (err) done(err);
                done();
            });
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

describe("Success create on : POST /users", function () {
    it("it shoud return status code 201 and create user", function (done) {
        supertest(app)
            .post("/users")
            .send(testUser2)
            .expect(201)
            .end(function (err, res) {
                generatedAuthTokenInFlow2 = res.body.token
                if (err) done(err);
                done();
            });
    });
});

describe("Success delete on : DELETE /users", function () {
    it("it shoud return status code 200 and delete user", function (done) {
        supertest(app)
            .delete("/users/me")
            .set('Authorization', 'Bearer ' + generatedAuthTokenInFlow2) 
            .send(testUser2)
            .expect(200)
            .end(function (err, res) {
                if (err) done(err);
                done();
            });
    });
});

after(async () => {
    await mongoose.connection.dropDatabase();
})