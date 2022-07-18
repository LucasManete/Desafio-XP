const assetServices = require('../services/assets.services');

const getOneAsset = async (req, res) => {
  const { id } = req.params;
  const result = await assetServices.findOneAsset(id);
  return res.status(200).json(result);
};

module.exports = { getOneAsset };
