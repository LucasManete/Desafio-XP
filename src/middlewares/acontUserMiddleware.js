/* eslint-disable consistent-return */
const { UserAcont } = require('../database/models');

const verifyDepositAcont = async (req, res, next) => {
  const { Valor, codCliente } = req.body;
  const byPk = await UserAcont.findByPk(codCliente);
  if (!byPk) {
    return res.status(404).json({ message: 'Conta inválida' });
  }
  if (Valor < 0 || Valor === 0) {
    return res.status(400).json({ message: 'Valor inválido' });
  }
  next();
};

const verifyWithdrwalAcont = async (req, res, next) => {
  const { Valor, codCliente } = req.body;
  const byPk = await UserAcont.findByPk(codCliente);
  if (!byPk) {
    return res.status(404).json({ message: 'Conta inválida' });
  }
  if (Valor > byPk.dataValues.balance || Valor < 0 || Valor === 0) {
    return res.status(400).json({ message: 'Valor inválido' });
  }
  next();
};

const verifyAcont = async (req, res, next) => {
  const { id } = req.params;
  const result = await UserAcont.findByPk(id);
  if (!result) {
    return res.status(404).json({ message: 'Conta não econtrada' });
  }
  next();
};

module.exports = { verifyDepositAcont, verifyAcont, verifyWithdrwalAcont };
