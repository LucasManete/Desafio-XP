/* eslint-disable no-undef */
const sinon = require('sinon');
const { expect } = require('chai');

const assetsService = require('../../../services/assets.services');
const Models = require('../../../database/models');
const { assetsMock } = require('../mockTeste');

describe('(camada service) Testa o retorno da API para todas as ações', () => {
  before(async () => {
    sinon.stub(Models.Asset, 'findAll').resolves(assetsMock);
  });

  after(() => {
    Models.Asset.findAll.restore();
  });
  it('Retorna um objeto', async () => {
    const response = await assetsService.getAllAssets();
    expect(response).to.be.an('array');
  });
  it('retorna um objeto que contem 4 keys', async () => {
    const result = await assetsService.getAllAssets();
    expect(result[0]).to.have.property('id');
    expect(result[0]).to.have.property('name');
    expect(result[0]).to.have.property('quantity');
    expect(result[0]).to.have.property('value');
  });
});

describe('(camada service) Testa o retorno da API para uma ação', () => {
  const bancoDados = { message: 'Ação não encontrada' };

  before(async () => {
    sinon.stub(Models.Asset, 'findByPk').resolves(bancoDados);
  });

  after(() => {
    Models.Asset.findByPk.restore();
  });
  it('Retorna um objeto message', async () => {
    const response = await assetsService.findOneAsset(99);
    expect(response).to.have.property('message');
  });
  it('Retorna um objeto message com conteúdo', async () => {
    const response = await assetsService.findOneAsset();
    expect(response).to.have.property('message').contain('Ação não encontrada');
  });
});
