/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
const sinon = require('sinon');
const { expect } = require('chai');
const UserServices = require('../../../services/acontUser.services');
const { errorAcontMock, acontUserMock, newValue } = require('../mockTeste');
const Models = require('../../../database/models');

describe('(camada service) Testa o retorno do banco de dados para conta de clientes', () => {
  before(async () => {
    sinon.stub(Models.UserAcont, 'findByPk').resolves(acontUserMock);
  });

  after(() => {
    Models.UserAcont.findByPk.restore();
  });
  it('Retorna um objeto', async () => {
    const response = await UserServices.getBalanceUser(acontUserMock.codCliente);
    expect(response).to.be.equal(acontUserMock);
  });
  it('retorna um objeto que contem 3 keys', async () => {
    const result = await UserServices.getBalanceUser(acontUserMock.codCliente);
    expect(result.dataValues).to.have.property('codCliente');
    expect(result.dataValues).to.have.property('balance');
    expect(result.dataValues).to.have.property('codCorretora');
  });
});

describe('(camada service) Testa o retorno da API para conta de clientes que não existe', () => {
  before(async () => {
    sinon.stub(Models.UserAcont, 'findByPk').resolves(errorAcontMock);
  });
  after(() => {
    Models.UserAcont.findByPk.restore();
  });
  it('Retorna um objeto message com conteúdo', async () => {
    const response = await UserServices.getBalanceUser(99);
    expect(response.message).to.be.equal('Conta inválida');
    expect(response.status).to.be.equal(404);
  });
});

describe('(camada service) Testa o retorno da API para o deposito da conta clientes', () => {
  before(async () => {
    sinon.stub(Models.UserAcont, 'findByPk').resolves(acontUserMock.dataValues)
      .onCall(0).resolves(acontUserMock)
      .onCall(1)
      .resolves(newValue);
    sinon.stub(Models.UserAcont, 'update').resolves();
  });

  after(() => {
    Models.UserAcont.findByPk.restore();
    Models.UserAcont.update.restore();
  });
  it('Retorna um objeto com 3 propriedades', async () => {
    const response = await UserServices.depositUser(1, 10);
    expect(response.codCliente).to.be.equal(1);
    expect(response.codCorretora).to.be.equal(2);
    expect(response.balance).to.be.equal(4230);
  });
});

describe('(camada service) Testa o retorno da API para o deposito invalido da conta clientes', () => {
  before(async () => {
    sinon.stub(Models.UserAcont, 'findByPk').resolves(acontUserMock);
    sinon.stub(Models.UserAcont, 'update').resolves();
  });

  after(() => {
    Models.UserAcont.findByPk.restore();
    Models.UserAcont.update.restore();
  });
  it('Retorna um objeto message', async () => {
    const response = await UserServices.depositUser(1, -1);
    expect(response.message).to.be.equal('Valor inválido');
  });
});

describe('(camada service) Testa o retorno da API para o saque de um valor invalido', () => {
  before(async () => {
    sinon.stub(Models.UserAcont, 'findByPk').resolves(acontUserMock);
    sinon.stub(Models.UserAcont, 'update').resolves();
  });

  after(() => {
    Models.UserAcont.findByPk.restore();
    Models.UserAcont.update.restore();
  });
  it('Retorna uma mensagem de erro', async () => {
    const response = await UserServices.withdrawUser(1, -1);
    expect(response.message).to.be.equal('Valor inválido');
  });
});

describe('(camada service) Testa o retorno da API para o saque em uma conta invalida', () => {
  before(async () => {
    sinon.stub(Models.UserAcont, 'findByPk').resolves(acontUserMock);
    sinon.stub(Models.UserAcont, 'update').resolves();
  });

  after(() => {
    Models.UserAcont.findByPk.restore();
    Models.UserAcont.update.restore();
  });

  it('Retorna um objeto message', async () => {
    const response = await UserServices.withdrawUser('1', 1);
    expect(response).to.have.property('message');
  });
});
