const express = require('express');

const router = express.Router();
const assetController = require('../controllers/assets.controller');
const acontUserController = require('../controllers/acontUser.services');
const investmentController = require('../controllers/investments.controller');
const userControler = require('../controllers/user.controller');
const validateToken = require('../middlewares/validadeJWT');

router.post('/user', userControler.createUser);

router.get('/ativos', validateToken, assetController.getAllAsset);
router.get('/ativos/:id', validateToken, assetController.getOneAsset);
router.get('/conta/:id', validateToken, acontUserController.getAcontUserController);
router.get('/investments/ativos/:codCliente', validateToken, investmentController.getClient);

router.post('/conta/deposito', acontUserController.depositUserController);
router.post('/conta/saque', acontUserController.withdrawUserController);

router.post('/investments/buy', validateToken, investmentController.buyAssetsController);
router.post('/investments/sell', validateToken, investmentController.sellAsset);
module.exports = router;
