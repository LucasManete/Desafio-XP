/* eslint-disable no-undef */
const sinon = require('sinon');
const { expect } = require('chai');

const assetsService = require('../../../services/assets.services');

describe('(camada service) Testa o retorno da API para todas as ações', () => {
  const bancoDados = [
    {
      id: 1,
      name: 'Azul',
      quantity: 497,
      value: '75.00',
    },
    {
      id: 2,
      name: 'XP',
      quantity: 580,
      value: '500.00',
    },
    {
      id: 3,
      name: 'Petrobras',
      quantity: 290,
      value: '65.00',
    },
  ];

  before(async () => {
    sinon.stub(assetsService, 'getAllAssets').resolves(bancoDados);
  });

  after(() => {
    assetsService.getAllAssets.restore();
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

describe('(camada service) Testa o retorno da API para todas as ações', () => {
  const bancoDados = { message: 'Ação não encontrada' };

  before(async () => {
    sinon.stub(assetsService, 'findOneAsset').resolves(bancoDados);
  });

  after(() => {
    assetsService.findOneAsset.restore();
  });
  it('Retorna um objeto message', async () => {
    const response = await assetsService.findOneAsset();
    expect(response).to.have.property('message');
  });
  it('Retorna um objeto message com conteúdo', async () => {
    const response = await assetsService.findOneAsset();
    expect(response).to.have.property('message').contain('Ação não encontrada');
  });
});
