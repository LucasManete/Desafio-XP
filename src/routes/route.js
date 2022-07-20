const express = require('express');

const router = express.Router();
const assetController = require('../controllers/assets.controller');
const acontUserController = require('../controllers/acontUser.services');
const investmentController = require('../controllers/investments.controller');

router.get('/ativos/:id', assetController.getOneAsset);
router.get('/conta/:id', acontUserController.getAcontUserController);
router.get('/investments/ativos/:codCliente', investmentController.getClient);

router.post('/conta/deposito', acontUserController.depositUserController);
router.post('/conta/saque', acontUserController.withdrawUserController);

router.post('/investments/buy', investmentController.buyAssetsController);
router.post('/investments/sell', investmentController.sellAsset);
module.exports = router;
