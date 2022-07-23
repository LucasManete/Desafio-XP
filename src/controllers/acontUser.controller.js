const AcontServices = require('../services/acontUser.services');

const getAcontUserController = async (req, res) => {
  const { id } = req.params;
  const result = await AcontServices.getBalanceUser(id);
  if (result.status) {
    return res.status(result.status).json({ message: result.message });
  }
  return res.status(200).json(result);
};

const depositUserController = async (req, res) => {
  const { codCliente, Valor } = req.body;
  const result = await AcontServices.depositUser(codCliente, Valor);
  if (result.message) {
    return res.status(result.status).json({ message: result.message });
  }
  return res.status(200).json(result);
};

const withdrawUserController = async (req, res) => {
  const { codCliente, Valor } = req.body;
  const result = await AcontServices.withdrawUser(codCliente, Valor);
  if (result.message) {
    return res.status(result.status).json({ message: result.message });
  }
  return res.status(200).json(result);
};

module.exports = { getAcontUserController, depositUserController, withdrawUserController };
