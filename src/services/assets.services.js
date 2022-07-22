const { Asset } = require('../database/models');

const findOneAsset = async (id) => {
  const resultQuery = await Asset.findByPk(id, { attributes: { exclude: 'id, codCorretora' } });
  if (!resultQuery) {
    const result = ({ status: 404, message: 'Ativo não encontrado' });
    return result;
  }
  return resultQuery;
};

const getAllAssets = async () => {
  const result = await Asset.findAll({ attributes: { exclude: 'codCorretora' } });
  return result;
};
const assetsService = { findOneAsset, getAllAssets };
module.exports = assetsService;
