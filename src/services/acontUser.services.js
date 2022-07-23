const { UserAcont } = require('../database/models');

const getBalanceUser = async (id) => {
  const result = await UserAcont.findByPk(id, { attributes: { exclude: 'id' } });
  if (!result) {
    const error = { status: 404, message: 'Conta inválida' };
    return error;
  }
  return result;
};

const depositUser = async (codCliente, Valor) => {
  const byPk = await UserAcont.findByPk(codCliente);
  if (!byPk) {
    const result = { status: 404, message: 'Conta inválida' };
    return result;
  }
  if (Valor < 0 || Valor === 0) {
    const result = { status: 400, message: 'Valor inválido' };
    return result;
  }
  const Saldo = +byPk.dataValues.balance + Valor;
  await UserAcont.update({ balance: Saldo }, { where: { codCliente } });
  const newBalance = await UserAcont.findByPk(codCliente, { attributes: { exclude: 'id' } });
  return newBalance;
};

const withdrawUser = async (codCliente, Valor) => {
  const byPk = await UserAcont.findByPk(codCliente);
  if (!byPk) {
    const result = { status: 404, message: 'Conta inválida' };
    return result;
  }
  if (Valor > byPk.dataValues.balance || Valor < 0 || Valor === 0) {
    const result = { status: 400, message: 'Valor inválido' };
    return result;
  }
  const Saldo = +byPk.dataValues.balance - Valor;
  await UserAcont.update({ balance: Saldo }, { where: { codCliente } });
  const newBalance = await UserAcont.findByPk(codCliente, { attributes: { exclude: 'id' } });
  return newBalance;
};

const userService = { getBalanceUser, depositUser, withdrawUser };

module.exports = userService;
