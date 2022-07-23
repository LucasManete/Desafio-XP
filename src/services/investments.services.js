const {
  Investment,
  Asset,
  UserAcont,
  sequelize,
} = require('../database/models');

const findUserByInvestment = async (codCliente) => {
  const resultQuery = await sequelize.query(`SELECT I.codCliente, I.codAtivo, I.qtdeAtivo, I.qtdeAtivo * A.value as ValorInvestido, A.value as ValorAcao FROM Investments as I
  INNER JOIN Assets as A on I.codAtivo = A.id
  WHERE I.codCliente = ${codCliente}`);
  const resultado = resultQuery[0];
  if (resultado.length === 0) {
    const result = { status: 404, message: 'usuario inválido' };
    return result;
  }
  return resultado;
};

const buyAssets = async (codCliente, qtdeAtivo, codAtivo) => {
  const getUser = await Investment.findOne({ attributes: ['id', 'qtdeAtivo'], where: { codCliente, codAtivo } });
  const getAsset = await Asset.findOne({ attributes: ['id', 'quantity', 'value'], where: { id: codAtivo } });
  const getAcont = await UserAcont.findOne({ attributes: ['id', 'balance'], where: { id: codCliente } });

  if (!getAsset) {
    const result = ({ status: 404, message: 'Ativo não encontrado' });
    return result;
  }
  if (!getUser) {
    const result = ({ status: 404, message: 'Usuario não encontrado' });
    return result;
  }
  if (qtdeAtivo > getAsset.dataValues.quantity || qtdeAtivo === 0 || qtdeAtivo < 0) {
    const result = ({ status: 400, message: 'Quantidade insuficiente de ativos na corretora' });
    return result;
  }

  const custoTotal = getAsset.dataValues.value * qtdeAtivo;

  if (getAcont.dataValues.balance < custoTotal) {
    const result = ({ status: 400, message: 'Valor insuficiente para compra' });
    return result;
  }

  const assets = getUser.dataValues.qtdeAtivo + qtdeAtivo;
  const quantityAtt = getAsset.dataValues.quantity - qtdeAtivo;
  const valorAttDaConta = getAcont.dataValues.balance - custoTotal;

  await UserAcont.update({ balance: valorAttDaConta }, { where: { codCliente } });
  await Investment.update({ qtdeAtivo: assets }, { where: { codCliente, codAtivo } });
  await getAsset.update({ quantity: quantityAtt }, { where: { codAtivo } });
  return { status: 200, message: 'Compra realizada com sucesso!' };
};

const sellAssets = async (codCliente, qtdeAtivo, codAtivo) => {
  const getUser = await Investment.findOne({ attributes: ['id', 'qtdeAtivo'], where: { codCliente, codAtivo } });
  const getAsset = await Asset.findOne({ attributes: ['id', 'quantity', 'value'], where: { id: codAtivo } });
  const getAcont = await UserAcont.findOne({ attributes: ['id', 'balance'], where: { id: codCliente } });

  if (!getAsset) {
    const result = ({ status: 404, message: 'Ativo não encontrado' });
    return result;
  }
  if (!getUser) {
    const result = ({ status: 404, message: 'Usuario não encontrado' });
    return result;
  }
  if (qtdeAtivo > getUser.dataValues.qtdeAtivo || getUser.dataValues.qtdeAtivo === 0) {
    const result = ({ status: 400, message: 'Quantidade insuficiente de ativos na carteira' });
    return result;
  }
  if (qtdeAtivo <= 0) {
    const result = ({ status: 400, message: 'Valor de venda inválido' });
    return result;
  }

  const custoTotal = getAsset.dataValues.value * qtdeAtivo;
  const assets = getUser.dataValues.qtdeAtivo - qtdeAtivo;
  const quantityAtt = getAsset.dataValues.quantity + qtdeAtivo;
  const valorAttDaConta = +getAcont.dataValues.balance + custoTotal;

  await Investment.update({ qtdeAtivo: assets }, { where: { codCliente, codAtivo } });
  await UserAcont.update({ balance: valorAttDaConta }, { where: { codCliente } });
  await getAsset.update({ quantity: quantityAtt }, { where: { codAtivo } });
  return { status: 200, message: 'Venda realizada com sucesso!' };
};

const investmentsService = { findUserByInvestment, buyAssets, sellAssets };
module.exports = investmentsService;
