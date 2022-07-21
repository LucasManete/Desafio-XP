const express = require('express');

const router = express.Router();
const assetController = require('../controllers/assets.controller');
const acontUserController = require('../controllers/acontUser.services');
const investmentController = require('../controllers/investments.controller');
const userControler = require('../controllers/user.controller');
const validateToken = require('../middlewares/validadeJWT');
const acontMiddleware = require('../middlewares/acontUserMiddleware');
const assetMiddleware = require('../middlewares/assetsMiddleware');
const investmentMiddleware = require('../middlewares/investmentsMiddleware');

router.post(
  '/user',
  userControler.createUser,
);
router.post(
  '/acont',
  userControler.createAcont,
);

router.get(
  '/ativos',
  validateToken,
  assetController.getAllAsset,
);

router.get(
  '/ativos/:id',
  assetMiddleware,
  validateToken,
  assetController.getOneAsset,
);

router.get(
  '/conta/:id',
  acontMiddleware.verifyAcont,
  validateToken,
  acontUserController.getAcontUserController,
);

router.get(
  '/investments/ativos/:codCliente',
  investmentMiddleware.userAssetsByCliente,
  validateToken,
  investmentController.getClient,
);

router.post(
  '/conta/deposito',
  validateToken,
  acontMiddleware.verifyDepositAcont,
  acontUserController.depositUserController,
);

router.post(
  '/conta/saque',
  validateToken,
  acontMiddleware.verifyWithdrwalAcont,
  acontUserController.withdrawUserController,
);

router.post(
  '/investments/buy',
  investmentMiddleware.BuyAssetsMiddleware,
  validateToken,
  investmentController.buyAssetsController,
);

router.post(
  '/investments/sell',
  investmentMiddleware.SellAssetsMiddleware,
  validateToken,
  investmentController.sellAsset,
);

module.exports = router;
