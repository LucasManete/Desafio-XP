const { Investment, Asset, sequelize } = require('../database/models');

const findUserByInvestment = async (codCliente) => {
  const result = await sequelize.query(`SELECT I.codCliente, I.codAtivo, I.qtdeAtivo, A.value FROM Investments as I
  INNER JOIN Assets as A on I.codAtivo = A.id
  WHERE I.codCliente = ${codCliente}`);
  const resultado = result[0];
  return resultado;
};

const buyAssets = async (codCliente, qtdeAtivo, codAtivo) => {
  const getUser = await Investment.findOne({ attributes: ['id', 'qtdeAtivo'], where: { codCliente, codAtivo } });
  const getAsset = await Asset.findOne({ attributes: ['id', 'quantity'], where: { id: codAtivo } });

  const assets = getUser.dataValues.qtdeAtivo + qtdeAtivo;
  const quantityAtt = getAsset.dataValues.quantity - qtdeAtivo;

  await Investment.update({ qtdeAtivo: assets }, { where: { codCliente, codAtivo } });
  await getAsset.update({ quantity: quantityAtt }, { where: { codAtivo } });
  return { message: 'Compra realizada com sucesso!' };
};

const sellAssets = async (codCliente, qtdeAtivo, codAtivo) => {
  const getUser = await Investment.findOne({ attributes: ['id', 'qtdeAtivo'], where: { codCliente, codAtivo } });
  const getAsset = await Asset.findOne({ attributes: ['id', 'quantity'], where: { id: codAtivo } });

  const assets = getUser.dataValues.qtdeAtivo - qtdeAtivo;
  const quantityAtt = getAsset.dataValues.quantity + qtdeAtivo;

  await Investment.update({ qtdeAtivo: assets }, { where: { codCliente, codAtivo } });
  await getAsset.update({ quantity: quantityAtt }, { where: { codAtivo } });
  return { message: 'Venda realizada com sucesso!' };
};

const investmentsService = { findUserByInvestment, buyAssets, sellAssets };
module.exports = investmentsService;
