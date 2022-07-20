const { Asset } = require('../database/models');

const findOneAsset = async (id) => {
  const { quantity, name, value } = await Asset.findByPk(id, { attributes: { exclude: 'codCorretora' } });
  const renameAsset = {
    codAtivo: +id,
    name,
    qtdeAtivo: quantity,
    value,
  };
  return renameAsset;
};

const getAllAssets = async () => {
  const result = await Asset.findAll({ attributes: { exclude: 'codCorretora' } });
  return result;
};

module.exports = { findOneAsset, getAllAssets };
