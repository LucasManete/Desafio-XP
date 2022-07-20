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
  if (Valor > byPk.dataValues.balance || Valor < 0 || Valor === 0) {
    return {
      statusCode: 400,
      message: 'Valor de Saque inválido',
    };
  }
  const Saldo = +byPk.dataValues.balance + Valor;
  await UserAcont.update({ balance: Saldo }, { where: { codCliente } });
  const newBalance = await UserAcont.findByPk(codCliente);
  return { data: newBalance, statusCode: 200 };
};

const withdrawUser = async (codCliente, Valor) => {
  const byPk = await UserAcont.findByPk(codCliente);
  if (Valor > byPk.dataValues.balance || Valor < 0 || Valor === 0) {
    return {
      statusCode: 400,
      message: 'Valor de Saque inválido',
    };
  }
  const Saldo = +byPk.dataValues.balance - Valor;
  await UserAcont.update({ balance: Saldo }, { where: { codCliente } });
  const newBalance = await UserAcont.findByPk(codCliente);
  return { data: newBalance, statusCode: 200 };
};

module.exports = { getBalanceUser, depositUser, withdrawUser };
