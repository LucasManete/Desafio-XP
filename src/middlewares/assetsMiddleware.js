const { Asset } = require('../database/models');

// eslint-disable-next-line consistent-return
const findOneAssetMiddleware = async (req, res, next) => {
  const { id } = req.params;
  const result = await Asset.findByPk(id);
  if (!result) {
    return res.status(404).json({ message: 'Ação não encontrada' });
  }
  next();
};

module.exports = findOneAssetMiddleware;
