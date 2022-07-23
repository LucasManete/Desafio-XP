const jwt = require('jsonwebtoken');

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const SECRET = process.env.JWT_SECRET;

const token = (payload) => jwt.sign(payload, SECRET, jwtConfig);

module.exports = { token };
