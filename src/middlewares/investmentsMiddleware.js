/* eslint-disable consistent-return */
const { Investment, Asset } = require('../database/models');
const assets = require('../services/investments.services');

const BuyAssetsMiddleware = async (req, res, next) => {
  const { codCliente, qtdeAtivo, codAtivo } = req.body;
  const getUser = await Investment.findOne({ attributes: ['id', 'qtdeAtivo'], where: { codCliente, codAtivo } });
  const getAsset = await Asset.findOne({ attributes: ['id', 'quantity'], where: { id: codAtivo } });
  if (!getAsset) {
    return res.status(404).json({ message: 'Ativo não encontrado' });
  }
  if (!getUser) {
    return res.status(404).json({ message: 'Usuario não encontrado' });
  }
  if (qtdeAtivo > getAsset.dataValues.quantity || qtdeAtivo === 0 || qtdeAtivo < 0) {
    return res.status(400).json({ message: 'Quantidade insuficiente de ativos na corretora' });
  }
  if (qtdeAtivo > getUser.dataValues.qtdeAtivo || getUser.dataValues.qtdeAtivo === 0) {
    return { message: 'Quantidade insuficiente de ativos na carteira' };
  }
  next();
};

const SellAssetsMiddleware = async (req, res, next) => {
  const { codCliente, qtdeAtivo, codAtivo } = req.body;
  const getUser = await Investment.findOne({ attributes: ['id', 'qtdeAtivo'], where: { codCliente, codAtivo } });
  const getAsset = await Asset.findOne({ attributes: ['id', 'quantity'], where: { id: codAtivo } });
  if (!getAsset) {
    return res.status(404).json({ message: 'Ativo não encontrado' });
  }
  if (!getUser) {
    return res.status(404).json({ message: 'Usuario não encontrado' });
  }
  if (qtdeAtivo > getUser.dataValues.qtdeAtivo || getUser.dataValues.qtdeAtivo === 0) {
    return res.status(400).json({ message: 'Quantidade insuficiente de ativos na carteira' });
  }
  next();
};

const userAssetsByCliente = async (req, res, next) => {
  const { codCliente } = req.params;
  const result = await assets.findUserByInvestment(codCliente);
  if (result.length === 0) {
    return res.status(404).json({ message: 'Usuario não encontrado' });
  }
  next();
};

module.exports = { BuyAssetsMiddleware, SellAssetsMiddleware, userAssetsByCliente };
