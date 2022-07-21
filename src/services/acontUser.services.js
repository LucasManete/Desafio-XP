const { UserAcont } = require('../database/models');

const getBalanceUser = async (id) => {
  const { balance, codCliente } = await UserAcont.findByPk(id);
  const renameAttributes = {
    codCliente,
    Saldo: balance,
  };

  return renameAttributes;
};

const depositUser = async (codCliente, Valor) => {
  const byPk = await UserAcont.findByPk(codCliente);
  const Saldo = +byPk.dataValues.balance + Valor;
  await UserAcont.update({ balance: Saldo }, { where: { codCliente } });
  const newBalance = await UserAcont.findByPk(codCliente);
  return newBalance;
};

const withdrawUser = async (codCliente, Valor) => {
  const byPk = await UserAcont.findByPk(codCliente);
  const Saldo = +byPk.dataValues.balance - Valor;
  await UserAcont.update({ balance: Saldo }, { where: { codCliente } });
  const newBalance = await UserAcont.findByPk(codCliente);
  return newBalance;
};

module.exports = { getBalanceUser, depositUser, withdrawUser };
