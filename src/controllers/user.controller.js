const userServices = require('../services/user.services');
// const { token } = require('../auth/AuthToken');

const createUser = async (req, res) => {
  const { secret } = await userServices.createUser(req.body);
  return res.status(201).json({ token: secret });
};

module.exports = { createUser };
