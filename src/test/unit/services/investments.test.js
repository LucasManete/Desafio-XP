/* eslint-disable no-undef */
const sinon = require('sinon');
const { expect } = require('chai');

const investmentsService = require('../../../services/investments.services');
const Models = require('../../../database/models');
const {
  mockAsset, mockBalance, mockBalanceOK, mockQtdAsset, mockVenda,
} = require('../mockTeste');

describe('(camada service) Testa o retorno da API para compra de ativos', () => {
  it('Se não encontrar usuario', async () => {
    sinon.stub(Models.Investment, 'findOne').resolves(null);
    const response = await investmentsService.buyAssets(1, 1, 1);
    expect(response.message).to.be.equal('Usuario ou Ativo não encontrado');
    sinon.restore();
  });
  it('Se não encontrar um ativo', async () => {
    sinon.stub(Models.Investment, 'findOne').resolves(mockAsset);
    sinon.stub(Models.Asset, 'findOne').resolves(null);
    const response = await investmentsService.buyAssets(1, 1, 1);
    expect(response.message).to.be.equal('Ativo não encontrado');
    sinon.restore();
  });
  it('fail se tentar comprar mais ativos que tem na corretora', async () => {
    sinon.stub(Models.Investment, 'findOne').resolves(mockAsset);
    sinon.stub(Models.Asset, 'findOne').resolves(mockAsset);
    const response = await investmentsService.buyAssets(1, 10000, 1);
    expect(response.message).to.be.equal('Quantidade insuficiente de ativos na corretora');
    sinon.restore();
  });
  it('Saldo insuficiente', async () => {
    sinon.stub(Models.Investment, 'findOne').resolves(mockAsset);
    sinon.stub(Models.Asset, 'findOne').resolves(mockAsset);
    sinon.stub(Models.UserAcont, 'findOne').resolves(mockBalance);
    const response = await investmentsService.buyAssets(1, 1, 1);
    expect(response.message).to.be.equal('Saldo insuficiente para compra');
    sinon.restore();
  });
  it('Compra efetuada', async () => {
    sinon.stub(Models.Investment, 'findOne').resolves(mockAsset);
    sinon.stub(Models.Asset, 'findOne').resolves(mockAsset);
    sinon.stub(Models.UserAcont, 'findOne').resolves(mockBalanceOK);
    sinon.stub(Models.UserAcont, 'update').resolves(null);
    sinon.stub(Models.Investment, 'update').resolves(null);
    sinon.stub(Models.Asset, 'update').resolves(null);
    const response = await investmentsService.buyAssets(1, 1, 1);
    expect(response.message).to.be.equal('Compra realizada com sucesso!');
    sinon.restore();
  });
});

describe('(camada service) Testa o retorno da API para venda de ativos', () => {
  it('Se não encontrar usuario', async () => {
    sinon.stub(Models.Investment, 'findOne').resolves(null);
    const response = await investmentsService.sellAssets(1, 1, 1);
    expect(response.message).to.be.equal('Usuario ou Ativo não encontrado');
    sinon.restore();
  });
  it('Se não encontrar um ativo', async () => {
    sinon.stub(Models.Investment, 'findOne').resolves(mockAsset);
    sinon.stub(Models.Asset, 'findOne').resolves(null);
    const response = await investmentsService.sellAssets(1, 1, 1);
    expect(response.message).to.be.equal('Ativo não encontrado');
    sinon.restore();
  });
  it('fail se tentar vender mais ativos que tem na carteira', async () => {
    sinon.stub(Models.Investment, 'findOne').resolves(mockQtdAsset);
    const response = await investmentsService.sellAssets(1, 20, 1);
    expect(response.message).to.be.equal('Quantidade insuficiente de ativos na carteira');
    sinon.restore();
  });
  it('Ativo não encontrado', async () => {
    sinon.stub(Models.Investment, 'findOne').resolves(mockAsset);
    sinon.stub(Models.Asset, 'findOne').resolves(null);
    sinon.stub(Models.UserAcont, 'findOne').resolves(mockBalance);
    const response = await investmentsService.sellAssets(1, 1, 1);
    expect(response.message).to.be.equal('Ativo não encontrado');
    sinon.restore();
  });
  it('Valor menor que 0', async () => {
    sinon.stub(Models.Investment, 'findOne').resolves(mockAsset);
    sinon.stub(Models.Asset, 'findOne').resolves(mockVenda);
    sinon.stub(Models.UserAcont, 'findOne').resolves(mockBalance);
    const response = await investmentsService.sellAssets(1, 0, 1);
    expect(response.message).to.be.equal('Valor de venda inválido');
    sinon.restore();
  });
  it('Venda efetuada', async () => {
    sinon.stub(Models.Investment, 'findOne').resolves(mockAsset);
    sinon.stub(Models.Asset, 'findOne').resolves(mockAsset);
    sinon.stub(Models.UserAcont, 'findOne').resolves(mockBalanceOK);
    sinon.stub(Models.UserAcont, 'update').resolves(null);
    sinon.stub(Models.Investment, 'update').resolves(null);
    sinon.stub(Models.Asset, 'update').resolves(null);
    const response = await investmentsService.sellAssets(1, 1, 1);
    expect(response.message).to.be.equal('Venda realizada com sucesso!');
    sinon.restore();
  });
});
