const assetServices = require('../services/assets.services');

const getOneAsset = async (req, res) => {
  const { id } = req.params;
  const result = await assetServices.findOneAsset(id);
  if (result.message) {
    return res.status(result.status).json({ message: result.message });
  }
  return res.status(200).json(result);
};

const getAllAsset = async (_req, res) => {
  const result = await assetServices.getAllAssets();
  return res.status(200).json(result);
};

module.exports = { getOneAsset, getAllAsset };
