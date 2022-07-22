const express = require('express');

const router = express.Router();
const assetController = require('../controllers/assets.controller');
const acontUserController = require('../controllers/acontUser.controller');
const investmentController = require('../controllers/investments.controller');
const userControler = require('../controllers/user.controller');
const validateToken = require('../middlewares/validadeJWT');

/**
 * @swagger
 * tags:
 *     name: DesafioXP
 *     description: Endpoints do desafio
 */
router.post(
  '/usuario',
  userControler.loginUser,
);
/**
 * @swagger
 * /ativos:
 *    get:
 *        tags: [DesafioXP]
 *        description: Retorna uma lista de ativos
 *        security:
 *          - bearerAuth: []
 *        responses:
 *            200:
 *              content:
 *                application/json:
 *                  schema:
 *                     type: array
 */
router.get(
  '/ativos',
  validateToken,
  assetController.getAllAsset,
);

/**
 * @swagger
 * /ativos/{id}:
 *    get:
 *        tags: [DesafioXP]
 *        description: Retorna um ativo por id
 *        security:
 *          - bearerAuth: []
 *        parameters:
 *          - in: path
 *            name: id
 *            type: string
 *            required: true
 *        responses:
 *            200:
 *              content:
 *                application/json:
 *                  schema:
 *                     type: object
 *
 */
router.get(
  '/ativos/:id',
  validateToken,
  assetController.getOneAsset,
);

/**
 * @swagger
 * /conta/{id}:
 *    get:
 *        tags: [DesafioXP]
 *        description: Retorna uma conta por id
 *        security:
 *          - bearerAuth: []
 *        parameters:
 *          - in: path
 *            name: id
 *            type: string
 *            required: true
 *        responses:
 *            200:
 *              content:
 *                application/json:
 *                  schema:
 *                     type: object
 */

router.get(
  '/conta/:id',
  validateToken,
  acontUserController.getAcontUserController,
);

/**
 * @swagger
 * /investimentos/ativos/{codCliente}:
 *    get:
 *        tags: [DesafioXP]
 *        description: Retorna todos os ativo de um cliente
 *        security:
 *          - bearerAuth: []
 *        parameters:
 *          - in: path
 *            name: id
 *            type: string
 *            required: true
 *        responses:
 *            200:
 *              content:
 *                application/json:
 *                  schema:
 *                     type: object
 */

router.get(
  '/investimentos/ativos/:codCliente',
  validateToken,
  investmentController.getClient,
);

/**
 * @swagger
 * /conta/deposito:
 *    post:
 *      description: Retorna o valor atualizado da conta depois do deposito
 *      tags: [DesafioXP]
 *      security:
 *          - bearerAuth: []
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *           schema:
 *             type: object
 *    responses:
 *      200:
 *       content:
 *        application/json:
 *         schema:
 *           type: object
 */

router.post(
  '/conta/deposito',
  validateToken,
  acontUserController.depositUserController,
);

/**
 * @swagger
 * /conta/saque:
 *    post:
 *      description: Retorna o saldo restante na conta do cliente
 *      tags: [DesafioXP]
 *      security:
 *          - bearerAuth: []
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *           schema:
 *             type: object
 *    responses:
 *      200:
 *       content:
 *        application/json:
 *         schema:
 *           type: object
 */

router.post(
  '/conta/saque',
  validateToken,
  acontUserController.withdrawUserController,
);

/**
 * @swagger
 * /investimentos/comprar:
 *    post:
 *      description: Retorna a seguinte messagem:Compra realizada com sucesso!
 *      tags: [DesafioXP]
 *      security:
 *          - bearerAuth: []
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *           schema:
 *             type: object
 *    responses:
 *      200:
 *       content:
 *        application/json:
 *         schema:
 *           type: object
 */

router.post(
  '/investimentos/comprar',
  validateToken,
  investmentController.buyAssetsController,
);

/**
 * @swagger
 * /investimentos/vender:
 *    post:
 *      description: Retorna a seguinte messagem:Venda realizada com sucesso!
 *      tags: [DesafioXP]
 *      security:
 *          - bearerAuth: []
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *           schema:
 *             type: object
 *    responses:
 *      200:
 *       content:
 *        application/json:
 *         schema:
 *           type: object
 */

router.post(
  '/investimentos/vender',
  validateToken,
  investmentController.sellAsset,
);

module.exports = router;
