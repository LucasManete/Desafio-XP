const { Asset } = require('../database/models');

const findOneAsset = async (id) => {
  const { Quantity, valor, Name } = await Asset.findByPk(id, { attributes: { exclude: 'codCorretora' } });
  const renameAsset = {
    CodAtivo: +id,
    Name,
    QtdeAtivo: Quantity,
    Valor: valor,
  };
  return renameAsset;
};

module.exports = { findOneAsset };
