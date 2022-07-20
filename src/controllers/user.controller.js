const userServices = require('../services/user.services');

const createUser = async (req, res) => {
  const { secret } = await userServices.createUser(req.body);
  return res.status(201).json({ token: secret });
};

const createAcont = async (req, res) => {
  const result = await userServices.createAcont(req.body);
  return res.status(201).json(result);
};

module.exports = { createUser, createAcont };
