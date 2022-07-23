/* eslint-disable no-undef */
const sinon = require('sinon');
const { expect } = require('chai');

const investmentsService = require('../../../services/investments.services');

describe('(camada service) Testa o retorno da API para todas as ações', () => {
  const bancoDados = [
    {
      codCliente: 2,
      codAtivo: 1,
      qtdeAtivo: 10,
      value: '75.00',
    },
    {
      codCliente: 2,
      codAtivo: 2,
      qtdeAtivo: 120,
      value: '500.00',
    },
    {
      codCliente: 2,
      codAtivo: 3,
      qtdeAtivo: 50,
      value: '65.00',
    },
  ];

  before(async () => {
    sinon.stub(investmentsService, 'findUserByInvestment').resolves(bancoDados);
  });

  after(() => {
    investmentsService.findUserByInvestment.restore();
  });
  it('Retorna um objeto message', async () => {
    const response = await investmentsService.findUserByInvestment();
    expect(response).to.be.an('array');
  });
  it('Retorna um objeto message com conteúdo', async () => {
    const response = await investmentsService.findUserByInvestment();
    expect(response[0]).to.have.property('codCliente');
    expect(response[0]).to.have.property('codAtivo');
    expect(response[0]).to.have.property('qtdeAtivo');
    expect(response[0]).to.have.property('value');
  });
});

describe('(camada service) Testa o retorno da API para conta de clientes que não existe', () => {
  const bancoDados = { message: 'Usuario não encontrado' };

  before(async () => {
    sinon.stub(investmentsService, 'findUserByInvestment').resolves(bancoDados);
  });

  after(() => {
    investmentsService.findUserByInvestment.restore();
  });
  it('Retorna um objeto message', async () => {
    const response = await investmentsService.findUserByInvestment();
    expect(response).to.have.property('message');
  });
  it('Retorna um objeto message com conteúdo', async () => {
    const response = await investmentsService.findUserByInvestment();
    expect(response).to.have.property('message').contain('Usuario não encontrado');
  });
});

describe('(camada service) Testa o retorno da API para compra de ativos', () => {
  const bancoDados = { message: 'Compra realizada com sucesso!' };

  before(async () => {
    sinon.stub(investmentsService, 'buyAssets').resolves(bancoDados);
  });

  after(() => {
    investmentsService.buyAssets.restore();
  });
  it('Retorna um objeto message', async () => {
    const response = await investmentsService.buyAssets();
    expect(response).to.have.property('message');
  });
  it('Retorna um objeto message com conteúdo', async () => {
    const response = await investmentsService.buyAssets();
    expect(response).to.have.property('message').contain('Compra realizada com sucesso!');
  });
});

describe('(camada service) Testa o retorno da API para erro na compra de ativo', () => {
  const bancoDados = { message: 'Usuario não encontrado' };

  before(async () => {
    sinon.stub(investmentsService, 'buyAssets').resolves(bancoDados);
  });

  after(() => {
    investmentsService.buyAssets.restore();
  });
  it('Retorna um objeto message', async () => {
    const response = await investmentsService.buyAssets();
    expect(response).to.have.property('message');
  });
  it('Retorna um objeto message com conteúdo', async () => {
    const response = await investmentsService.buyAssets();
    expect(response).to.have.property('message').contain('Usuario não encontrado');
  });
});

describe('(camada service) Testa o retorno da API para erro na compra de ativo', () => {
  const bancoDados = { message: 'Quantidade insuficiente de ativos na corretora' };

  before(async () => {
    sinon.stub(investmentsService, 'buyAssets').resolves(bancoDados);
  });

  after(() => {
    investmentsService.buyAssets.restore();
  });
  it('Retorna um objeto message', async () => {
    const response = await investmentsService.buyAssets();
    expect(response).to.have.property('message');
  });
  it('Retorna um objeto message com conteúdo', async () => {
    const response = await investmentsService.buyAssets();
    expect(response).to.have.property('message').contain('Quantidade insuficiente de ativos na corretora');
  });
});

describe('(camada service) Testa o retorno da API para venda de ativos', () => {
  const bancoDados = { message: 'Venda realizada com sucesso!' };

  before(async () => {
    sinon.stub(investmentsService, 'sellAssets').resolves(bancoDados);
  });

  after(() => {
    investmentsService.sellAssets.restore();
  });
  it('Retorna um objeto message', async () => {
    const response = await investmentsService.sellAssets();
    expect(response).to.have.property('message');
  });
  it('Retorna um objeto message com conteúdo', async () => {
    const response = await investmentsService.sellAssets();
    expect(response).to.have.property('message').contain('Venda realizada com sucesso!');
  });
});

describe('(camada service) Testa o retorno da API para erros na venda de ativos', () => {
  const bancoDados = { message: 'Usuario não encontrado' };

  before(async () => {
    sinon.stub(investmentsService, 'sellAssets').resolves(bancoDados);
  });

  after(() => {
    investmentsService.sellAssets.restore();
  });
  it('Retorna um objeto message', async () => {
    const response = await investmentsService.sellAssets();
    expect(response).to.have.property('message');
  });
  it('Retorna um objeto message com conteúdo', async () => {
    const response = await investmentsService.sellAssets();
    expect(response).to.have.property('message').contain('Usuario não encontrado');
  });
});

describe('(camada service) Testa o retorno da API para erros na venda de ativos', () => {
  const bancoDados = { message: 'Quantidade insuficiente de ativos na carteira' };

  before(async () => {
    sinon.stub(investmentsService, 'sellAssets').resolves(bancoDados);
  });

  after(() => {
    investmentsService.sellAssets.restore();
  });
  it('Retorna um objeto message', async () => {
    const response = await investmentsService.sellAssets();
    expect(response).to.have.property('message');
  });
  it('Retorna um objeto message com conteúdo', async () => {
    const response = await investmentsService.sellAssets();
    expect(response).to.have.property('message').contain('Quantidade insuficiente de ativos na carteira');
  });
});
