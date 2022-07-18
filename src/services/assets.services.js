const { Asset } = require('../database/models');

const findOneAsset = async () => {
  const findAsset = await Asset.findAll();
  console.log('findAsset', findAsset);
  return findAsset;
};

module.exports = { findOneAsset };
