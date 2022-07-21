const investmentServices = require('../services/investments.services');

const getClient = async (req, res) => {
  const { codCliente } = req.params;
  const result = await investmentServices.findUserByInvestment(codCliente);
  return res.status(200).json(result);
};

const buyAssetsController = async (req, res) => {
  const { codCliente, qtdeAtivo, codAtivo } = req.body;
  const result = await investmentServices.buyAssets(codCliente, qtdeAtivo, codAtivo);
  return res.status(200).json(result);
};

const sellAsset = async (req, res) => {
  const { codCliente, qtdeAtivo, codAtivo } = req.body;
  const result = await investmentServices
    .sellAssets(codCliente, qtdeAtivo, codAtivo);
  return res.status(200).json(result);
};

module.exports = { getClient, buyAssetsController, sellAsset };
