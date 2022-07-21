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
