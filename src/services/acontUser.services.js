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
  if (Valor < 0 || Valor === 0) {
    return {
      statusCode: 400,
      message: 'Valor de Deposito inválido',
    };
  }
  const Saldo = byPk.dataValues.Balance + Valor;
  await UserAcont.update({ Balance: Saldo }, { where: { codCliente } });
  const newBalance = await UserAcont.findByPk(codCliente);
  return { data: newBalance, statusCode: 200 };
};

const withdrawUser = async (codCliente, Valor) => {
  const byPk = await UserAcont.findByPk(codCliente);
  if (Valor > byPk.dataValues.Balance || Valor < 0 || Valor === 0) {
    return {
      statusCode: 400,
      message: 'Valor de Saque inválido',
    };
  }
  const Saldo = byPk.dataValues.Balance - Valor;
  await UserAcont.update({ Balance: Saldo }, { where: { codCliente } });
  const newBalance = await UserAcont.findByPk(codCliente);
  return { data: newBalance, statusCode: 200 };
};

module.exports = { getBalanceUser, depositUser, withdrawUser };
