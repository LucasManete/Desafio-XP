const { Investment, Asset } = require('../database/models');

const findUserByInvestment = async (codCliente) => {
  const result = await Investment.findAll({
    where: { codCliente },
    attributes: { exclude: 'id, value' },
    // include: [
    //   { model: Asset, as: 'asset' },
    // ],
  });
  return result;
};

const buyAssets = async (codCliente, qtdeAtivo, codAtivo) => {
  const getUser = await Investment.findOne({ attributes: ['id', 'qtdeAtivo'], where: { codCliente, codAtivo } });
  const getAsset = await Asset.findOne({ attributes: ['id', 'quantity'], where: { id: codAtivo } });
  if (qtdeAtivo > getAsset.dataValues.quantity) {
    return { message: 'Quantidade insuficiente de ativos na corretora' };
  }
  const assets = getUser.dataValues.qtdeAtivo + qtdeAtivo;
  const quantityAtt = getAsset.dataValues.quantity - qtdeAtivo;
  const getNewQuantity = await Investment
    .update({ qtdeAtivo: assets }, { where: { codCliente, codAtivo } });
  await getAsset.update({ quantity: quantityAtt }, { where: { codAtivo } });
  return getNewQuantity;
};

const sellAssets = async (codCliente, qtdeAtivo, codAtivo) => {
  const getUser = await Investment.findOne({ attributes: ['id', 'qtdeAtivo'], where: { codCliente, codAtivo } });
  const getAsset = await Asset.findOne({ attributes: ['id', 'quantity'], where: { id: codAtivo } });
  if (qtdeAtivo > getUser.dataValues.qtdeAtivo) {
    return { message: 'Quantidade insuficiente de ativos na carteira' };
  }
  const assets = getUser.dataValues.qtdeAtivo - qtdeAtivo;
  const quantityAtt = getAsset.dataValues.quantity + qtdeAtivo;
  const getNewQuantity = await Investment
    .update({ qtdeAtivo: assets }, { where: { codCliente, codAtivo } });
  await getAsset.update({ quantity: quantityAtt }, { where: { codAtivo } });
  return getNewQuantity;
};

module.exports = { findUserByInvestment, buyAssets, sellAssets };
