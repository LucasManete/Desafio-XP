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

module.exports = { findOneAsset };
