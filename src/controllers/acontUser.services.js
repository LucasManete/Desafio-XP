const AcontServices = require('../services/acontUser.services');

const getAcontUserController = async (req, res) => {
  const { id } = req.params;
  const result = await AcontServices.getBalanceUser(id);
  return res.status(200).json(result);
};

const depositUserController = async (req, res) => {
  const { codCliente, Valor } = req.body;
  const { message, data, statusCode } = await AcontServices.depositUser(codCliente, Valor);
  if (message) {
    return res.status(statusCode).json({ Alerta: message });
  }
  return res.status(statusCode).json(data);
};

const withdrawUserController = async (req, res) => {
  const { codCliente, Valor } = req.body;
  const { data, message, statusCode } = await AcontServices.withdrawUser(codCliente, Valor);
  if (message) {
    return res.status(statusCode).json({ Alerta: message });
  }
  return res.status(statusCode).json(data);
};

module.exports = { getAcontUserController, depositUserController, withdrawUserController };
