const supertest = require('supertest');
const mongoose = require('mongoose');
const { expect } = require('chai');
const app = require('../src/server');
const User = require('../src/models/User');

/* Test flow 1:
    - auth error
    - create user
    - login with created user datas
    - update user datas
    - logout
*/

let generatedAuthTokenInFlow1 = '';
const testUser = {
  name: 'Flow1 User',
  email: 'test_flow100@gmail.com',
  password: 'test1111111'
};

describe('User tests', async () => {
  before(async () => {
    await User.deleteMany();
  });

  it('Expect status code 401 because of auth error', async () => {
    await supertest(app).get('/users/me').expect(401);
  });

  it('it should return status code 201 and create user', async () => {
    const response = await supertest(app)
      .post('/users')
      .send(testUser)
      .expect(201);
    const user = await User.findById(response.body.user._id);
    expect(user).not.to.be.null;
    expect(user.password).not.to.equal('test1111111');

    generatedAuthTokenInFlow1 = response.body.token;
  });

  it('it should return status code 200 and login user', async () => {
    await supertest(app)
      .post('/users/login')
      .send({ email: testUser.email, password: testUser.password })
      .expect(200);
  });

  it('it should return status code 404 and not login user', async () => {
    await supertest(app)
      .post('/users/login')
      .send({ email: "a@b.com"})
      .expect(404);
  });

  it('it should return status code 200 and update user', async () => {
    await supertest(app)
      .patch('/users/me')
      .set('Authorization', `Bearer ${generatedAuthTokenInFlow1}`)
      .send({ name: 'Modified name' })
      .expect(200);
    const user = await User.findByCredentials(
      testUser.email,
      testUser.password
    );
    expect(user.name).to.equal('Modified name');
  });

  it('it should return status code 400 and not update user because of invalid fields', async () => {
    await supertest(app)
      .patch('/users/me')
      .set('Authorization', `Bearer ${generatedAuthTokenInFlow1}`)
      .send({ favorit_food: 'Pizza' })
      .expect(400);
  });

  it('it should return status code 200 and logout user', async () => {
    const userBefore = await User.findByCredentials(
      testUser.email,
      testUser.password
    );
    await supertest(app)
      .post('/users/logout')
      .set('Authorization', `Bearer ${generatedAuthTokenInFlow1}`)
      .send()
      .expect(200);
    const userAfter = await User.findByCredentials(
      testUser.email,
      testUser.password
    );
    expect(userBefore.tokens.length).not.to.equal(userAfter.tokens.length);
  });
});

/* Test flow 2:
    - create user
    - delete user
*/

let generatedAuthTokenInFlow2 = '';
const testUser2 = {
  name: 'Flow2 User',
  email: 'test_flow2@gmail.com',
  password: 'test1111111'
};

describe('Create and delete user', async () => {
  before(async () => {
    await User.deleteMany();
  });
  after(() => mongoose.connection.close());

  it('it should return status code 201 and create user', async () => {
    const response = await supertest(app)
      .post('/users')
      .send(testUser2)
      .expect(201);
    generatedAuthTokenInFlow2 = response.body.token;
    const user = await User.findById(response.body.user._id);
    expect(user).not.to.be.null;
  });

  it('it should return status code 200 and delete user', async () => {
    const userBefore = await User.findByCredentials(
      testUser2.email,
      testUser2.password
    );
    await supertest(app)
      .delete('/users/me')
      .set('Authorization', `Bearer ${generatedAuthTokenInFlow2}`)
      .send()
      .expect(200);
    const userAfter = await User.findById(userBefore._id);
    expect(userAfter).to.be.null;
  });

  it('it should not delete account for unauthenticated user', async () => {
    await supertest(app).delete('/users/me').send().expect(401);
  });
});
