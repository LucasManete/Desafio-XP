const { Investment, Asset } = require('../database/models');

const findUserByInvestment = async (codCliente) => {
  const result = await Investment.findAll({
    where: { codCliente },
    attributes: { exclude: 'id, Valor' },
    include: [
      { model: Asset, as: 'asset' },
    ],
  });
  return result;
};

const buyAssets = async (codCliente, qtdeAtivo, codAtivo) => {
  const getUser = await Investment.findByPk(codCliente);
  const getAsset = await Asset.findByPk(codAtivo);
  if (qtdeAtivo > getAsset.dataValues.Quantity) {
    return { message: 'Quantidade insuficiente de ativos na corretora' };
  }
  const assets = getUser.dataValues.qtdeAtivo + qtdeAtivo;
  const quantityAtt = getAsset.dataValues.Quantity - qtdeAtivo;
  const result = await getUser.update({ qtdeAtivo: assets }, { where: { codCliente } });
  await getAsset.update({ Quantity: quantityAtt }, { where: { id: codAtivo } });
  return result;
};

const sellAssets = async (codCliente, qtdeAtivo, codAtivo) => {
  const getUser = await Investment.findByPk(codCliente);
  const getAsset = await Asset.findByPk(codAtivo);
  const assets = getUser.dataValues.qtdeAtivo - qtdeAtivo;
  const quantityAtt = getAsset.dataValues.Quantity + qtdeAtivo;
  const result = await getUser.update({ qtdeAtivo: assets }, { where: { codCliente } });
  await getAsset.update({ Quantity: quantityAtt }, { where: { id: codAtivo } });
  return result;
};

module.exports = { findUserByInvestment, buyAssets, sellAssets };
