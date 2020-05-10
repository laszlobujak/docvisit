require('dotenv').config();
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const auth = async (req, res, next) => {
  try {
    let token;
    if (req.body.headers) {
      token = req.body.headers.Authorization.replace('Bearer ', '');
    } else {
      token = req.headers.authorization.replace('Bearer ', '');
    }
    const decoded = jwt.verify(token, process.env.JWT_TOKEN_SECRET);
    const user = await User.findOne({
      _id: decoded._id,
      'tokens.token': token,
    });
    if (!user) {
      throw new Error();
    }
    req.token = token;
    req.user = user;
    next();
  } catch (error) {
    res.status(401).send({ error: 'Please authenticate' });
  }
};

module.exports = auth;
