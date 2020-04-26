const express = require('express');
const User = require('../models/User');
const auth = require('../middleware/auth');
const router = new express.Router();
/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User management
 */
/**
 * @swagger
 * path:
 *  /users:
 *    post:
 *      summary: Create a new user
 *      tags: [Users]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *      responses:
 *        "201":
 *          description: A user schema
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/User'
 */
router.post('/users', async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    const token = await user.generateToken();
    res.status(201).send({ user, token });
  } catch (error) {
    res.status(400).send(error);
  }
});
/**
 * @swagger
 * path:
 *  /users/login:
 *    post:
 *      summary: Login
 *      tags: [Users]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 */
router.post('/users/login', async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );

    const token = await user.generateToken();
    res.send({ user, token });
  } catch (error) {
    res.status(400).send();
  }
});
/**
 * @swagger
 * path:
 *  /users/logout:
 *    post:
 *      summary: Logout this user
 *      tags: [Users]
 */
router.post('/users/logout', auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter(token => token.token != req.token);
    await req.user.save();
    res.send();
  } catch (error) {
    res.status(500).send();
  }
});
/**
 * @swagger
 * path:
 *  /users/logoutAll:
 *    post:
 *      summary: Logout all users
 *      tags: [Users]
 */
router.post('/users/logoutAll', auth, async (req, res) => {
  try {
    req.user.tokens = [];
    await req.user.save();
    res.send();
  } catch (error) {
    res.status(500).send();
  }
});
/**
 * @swagger
 * path:
 *  /users/me:
 *    get:
 *      summary: Get this user
 *      tags: [Users]
 */
router.get('/users/me', auth, async (req, res) => {
  res.send(req.user);
});
/**
 * @swagger
 * path:
 *  /users/me:
 *    patch:
 *      summary: Update this user
 *      tags: [Users]
 */
router.patch('/users/me', auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['name', 'email', 'password'];
  const isValidOperation = updates.every(update =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid operation!' });
  }

  try {
    updates.forEach(update => (req.user[update] = req.body[update]));
    await req.user.save();
    res.send(req.user);
  } catch (error) {
    res.status(400).send(error);
  }
});
/**
 * @swagger
 * path:
 *  /users/me:
 *    delete:
 *      summary: Delete this user
 *      tags: [Users]
 */
router.delete('/users/me', auth, async (req, res) => {
  try {
    await req.user.remove();
    res.send(req.user);
  } catch (error) {
    res.status(500).send();
  }
});

module.exports = router;
