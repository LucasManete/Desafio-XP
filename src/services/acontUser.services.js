const { UserAcont } = require('../database/models');

const getBalanceUser = async (id) => {
  const { Balance, codCliente } = await UserAcont.findByPk(id);
  const renameAttributes = {
    codCliente,
    Saldo: Balance,
  };

  return renameAttributes;
};

const depositUser = async (codCliente, Valor) => {
  const byPk = await UserAcont.findByPk(codCliente);
  const Saldo = byPk.dataValues.Balance + Valor;
  await UserAcont.update({ Balance: Saldo }, { where: { codCliente } });
  const newBalance = await UserAcont.findByPk(codCliente);
  return newBalance;
};

module.exports = { getBalanceUser, depositUser };
