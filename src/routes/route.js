/* eslint-disable max-len */
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

/**
 * @swagger
 * /usuario:
 *    post:
 *        tags: [DesafioXP]
 *        description: Retorna o token para navegação em outras rotas
 *        security:
 *          - bearerAuth: []
 *        requestBody:
 *            required: true
 *            content:
 *             application/json:
 *               schema:
 *                 type: object
 *               example:
 *                 name: teste
 *                 email: teste_teste@gmail.com
 *                 password: 123456teste
 *        responses:
 *           200:
 *             description: 'Retorna o token do usuario'
 *             content:
 *              application/json:
 *               schema:
 *                 type: object
 *               example:
 *                 {token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6eyJuYW1lIjoiVGVzdGUiLCJlbWFpbCI6InRlc3RlX3Rlc3RlQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiMTIzNDU2dGVzdGUifSwiaWF0IjoxNjU4NTIwOTk0LCJleHAiOjE2NTkxMjU3OTR9.8ffVEBez_zu-oUdehq9TApbCqrs8pLCqQwKNbp2GhV8"}
 *           404:
 *             description: 'Retorna o token do usuario'
 *             content:
 *              application/json:
 *               schema:
 *                 type: object
 *               example:
 *                 {message: usuario inválido }
 *
 *
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
 *        description: Retorna todos os ativos
 *        security:
 *          - bearerAuth: []
 *        responses:
 *           200:
 *             description: 'Retorna um Array com todos os ativos'
 *             content:
 *               application/json:
 *                 schema:
 *                   type: array
 *                 example:
 *                    [
 *                       {
 *                          codCliente:1
 *                          name:Azul
 *                          quantity:542
 *                          value:75
 *                       },
 *                    ]
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
 *        description: Retorna um ativo por ID
 *        security:
 *          - bearerAuth: []
 *        parameters:
 *          - in: path
 *            name: id
 *            type: string
 *            required: true
 *        responses:
 *           200:
 *             description: 'Retorna um ativo por id'
 *             content:
 *              application/json:
 *               schema:
 *                 type: object
 *               example:
 *                 name: Azul
 *                 quantity: 544
 *                 value: 75.00
  *           401:
 *             description: 'Token not Found'
 *             content:
 *               application/json:
 *                 schema:
 *                   type: object
 *                 example:
 *                    {message: 'Token not Found'}
 *           404:
 *             description: 'Ativo inválido'
 *             content:
 *               application/json:
 *                 schema:
 *                   type: object
 *                 example:
 *                    {message: 'Ativo não encontrado'}
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
 *           200:
 *             description: 'Retorna a conta do usuario'
 *             content:
 *              application/json:
 *               schema:
 *                 type: object
 *               example:
 *                 codCliente: 1
 *                 codCorretora: 2
 *                 balance: 23.30
  *           401:
 *             description: 'Token not Found'
 *             content:
 *               application/json:
 *                 schema:
 *                   type: object
 *                 example:
 *                    {message: 'Token not Found'}
 *           404:
 *             description: 'Conta inválida'
 *             content:
 *               application/json:
 *                 schema:
 *                   type: object
 *                 example:
 *                    {message: 'Conta inválida'}
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
 *        description: Retorna todos os ativos relacionados a um cliente
 *        security:
 *          - bearerAuth: []
 *        parameters:
 *          - in: path
 *            name: codCliente
 *            type: string
 *            required: true
 *        responses:
 *           200:
 *             description: 'Retorna a conta do usuario'
 *             content:
 *              application/json:
 *               schema:
 *                 type: array
 *                 example:
 *                    [
 *                       {
 *                          codCliente:1
 *                          codAtivo:1
 *                          qtdeAtivo:20
 *                          ValorInvestido:1500.00
 *                          valorAcao:75.00
 *                       },
 *                    ]
 *           401:
 *             description: 'Token not Found'
 *             content:
 *               application/json:
 *                 schema:
 *                   type: object
 *                 example:
 *                    {message: 'Token not Found'}
 *           404:
 *             description: 'Conta inválida'
 *             content:
 *               application/json:
 *                 schema:
 *                   type: object
 *                 example:
 *                    {message: 'usuario inválida'}
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
 *        tags: [DesafioXP]
 *        description: Retorna um objeto com o valor atualizado
 *        security:
 *          - bearerAuth: []
 *        requestBody:
 *            required: true
 *            content:
 *             application/json:
 *               schema:
 *                 type: object
 *               example:
 *                 codCliente: 1
 *                 Valor: 400.30
 *        responses:
 *           200:
 *             description: 'Retorna o saldo atualizado'
 *             content:
 *              application/json:
 *               schema:
 *                 type: object
 *               example:
 *                 balance: 4230.20
 *                 codCliente: 1
 *                 codCorretora: 2
 *           401:
 *             description: 'Token not Found'
 *             content:
 *               application/json:
 *                 schema:
 *                   type: object
 *                 example:
 *                    {message: 'Token not Found'}
 *           404:
 *             description: 'Conta inválida'
 *             content:
 *               application/json:
 *                 schema:
 *                   type: object
 *                 example:
 *                    {message: 'Conta inválida'}
 *
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
 *        tags: [DesafioXP]
 *        description: Retorna um objeto com o valor atualizado
 *        security:
 *          - bearerAuth: []
 *        requestBody:
 *            required: true
 *            content:
 *             application/json:
 *               schema:
 *                 type: object
 *               example:
 *                 codCliente: 1
 *                 Valor: 400.30
 *        responses:
 *           200:
 *             description: 'Retorna o saldo atualizado'
 *             content:
 *              application/json:
 *               schema:
 *                 type: object
 *               example:
 *                 codCliente: 1
 *                 codCorretora: 2
 *                 balance: 4230.20
 *           401:
 *             description: 'Token not Found'
 *             content:
 *               application/json:
 *                 schema:
 *                   type: object
 *                 example:
 *                    {message: 'Token not Found'}
  *           400:
 *             description: 'Valor maior que possui'
 *             content:
 *               application/json:
 *                 schema:
 *                   type: object
 *                 example:
 *                    {message: 'Valor inválido'}
 *           404:
 *             description: 'Conta inválida'
 *             content:
 *               application/json:
 *                 schema:
 *                   type: object
 *                 example:
 *                    {message: 'Conta inválida'}
 *
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
 *        tags: [DesafioXP]
 *        description: Retorna uma mensagem de sucesso ou erro
 *        security:
 *          - bearerAuth: []
 *        requestBody:
 *            required: true
 *            content:
 *             application/json:
 *               schema:
 *                 type: object
 *               example:
 *                 codCliente: 1
 *                 qtdeAtivo: 20
 *                 codAtivo: 2
 *        responses:
 *           200:
 *             description: 'Retorna o saldo atualizado'
 *             content:
 *              application/json:
 *               schema:
 *                 type: object
 *               example:
 *                 {message: 'Compra realizada com sucesso'}
 *           401:
 *             description: 'Token not Found'
 *             content:
 *               application/json:
 *                 schema:
 *                   type: object
 *                 example:
 *                    {message: 'Token not Found'}
 *           404:
 *             description: 'Conta inválida'
 *             content:
 *               application/json:
 *                 schema:
 *                   type: object
 *                 example:
 *                    {message: 'Ativo não encontrado'}
 *
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
 *        tags: [DesafioXP]
 *        description: Retorna uma mensagem de sucesso ou erro
 *        security:
 *          - bearerAuth: []
 *        requestBody:
 *            required: true
 *            content:
 *             application/json:
 *               schema:
 *                 type: object
 *               example:
 *                 codCliente: 1
 *                 qtdeAtivo: 20
 *                 codAtivo: 2
 *        responses:
 *           200:
 *             description: 'Retorna uma mensagem'
 *             content:
 *              application/json:
 *               schema:
 *                 type: object
 *               example:
 *                 {message: 'Venda realizada com sucesso!'}
 *           401:
 *             description: 'Token not Found'
 *             content:
 *               application/json:
 *                 schema:
 *                   type: object
 *                 example:
 *                    {message: 'Token not Found'}
 *           400:
 *             description: 'Ativos insuficientes na carteira'
 *             content:
 *               application/json:
 *                 schema:
 *                   type: object
 *                 example:
 *                    {message: 'Quantidade insuficiente de ativos na carteira'}
 *           404:
 *             description: 'Conta inválida'
 *             content:
 *               application/json:
 *                 schema:
 *                   type: object
 *                 example:
 *                    {message: 'Usuario não encontrado'}
 *
 *
 */

router.post(
  '/investimentos/vender',
  validateToken,
  investmentController.sellAsset,
);

module.exports = router;
