const request = require('supertest')
    , server= require('../server')

describe("homepage", function(){
    it("users", function (done){
        request(server).post("/users")
        .send({user:"Bela"})
        .expect(201, done)        
    })
})

describe("login", function(){
    it("User login", function (done){
        request(server).post("/users/login")
        .send({email:"Bela@gmail.com", password:"password123"})
        .expect(201, done)        
    })
})

describe("invalid login", function(){
    it("User login without password", function (done){
        request(server).post("/users/login")
        .send({email:"Bela@gmail.com"})
        .expect(400, done)        
    })
})

describe("invalid login 2", function(){
    it("User login without email", function (done){
        request(server).post("/users/login")
        .send({password:"password123"})
        .expect(400, done)        
    })
})

describe("logout", function(){
    it("User logout", function (done){
        request(server).post("/users/logout")
        .send({user:"Bela"})
        .expect(201, done)        
    })
})

describe("User", function(){
    it("User info", function (done){
        request(server).get("/users/me")
        .expect(201)
        .expect({user}, done)        
    })
})

describe("User", function(){
    it("User delete", function (done){
        request(server).get("/users/me")
        .expect(201)
        .expect({user}, done)        
    })
})