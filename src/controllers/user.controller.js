const userServices = require('../services/user.services');

const loginUser = async (req, res) => {
  const secret = await userServices.loginUser(req.body);
  if (secret.message) {
    return res.status(secret.status).json({ alerta: secret.message });
  }
  return res.status(200).json({ token: secret });
};

module.exports = { loginUser };
