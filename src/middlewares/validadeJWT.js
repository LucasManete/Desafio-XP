const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET;

// eslint-disable-next-line consistent-return
const validateToken = async (req, res, next) => {
  const auth = req.headers.authorization;
  if (!auth) {
    return res.status(401).json({ message: 'Token not found' });
  }
  const [, token] = auth.split(' ');
  try {
    jwt.verify(token, SECRET);
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = validateToken;
