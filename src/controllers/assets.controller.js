const assetServices = require('../services/assets.services');

const getAllAsset = async (_req, res) => {
//   const { id } = req.params;
  const result = await assetServices.findOneAsset();
  return res.status(200).json(result);
};

module.exports = { getAllAsset };
