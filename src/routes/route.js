const express = require('express');

const router = express.Router();
const assetController = require('../controllers/assets.controller');

router.get('/', assetController.getAllAsset);
module.exports = router;
