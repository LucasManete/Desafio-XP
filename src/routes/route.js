const express = require('express');

const router = express.Router();
const assetController = require('../controllers/assets.controller');
const acontUserController = require('../controllers/acontUser.services');

router.get('/ativos/:id', assetController.getOneAsset);
router.get('/conta/:id', acontUserController.getAcontUserController);

router.post('/conta/deposito', acontUserController.depositUserController);
router.post('/conta/saque', acontUserController.withdrawUserController);
module.exports = router;
