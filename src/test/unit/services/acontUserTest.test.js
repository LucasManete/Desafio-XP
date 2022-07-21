/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
const sinon = require('sinon');
const { expect } = require('chai');
const UserServices = require('../../../services/acontUser.services');

describe('(camada service) Testa o retorno do banco de dados para conta de clientes', () => {
  const bancoDados = { codCliente: 2, Saldo: 5000 };

  before(async () => {
    sinon.stub(UserServices, 'getBalanceUser').resolves(bancoDados);
  });

  after(() => {
    UserServices.getBalanceUser.restore();
  });
  it('Retorna um objeto', async () => {
    const response = await UserServices.getBalanceUser();
    expect(response).to.be.an('object');
  });
  it('retorna um objeto que contem 2 keys', async () => {
    const result = await UserServices.getBalanceUser();
    expect(result).to.have.property('codCliente');
    expect(result).to.have.property('Saldo');
  });
});

describe('(camada service) Testa o retorno da API para conta de clientes que não existe', () => {
  const bancoDados = { message: 'Conta não econtrada' };

  before(async () => {
    sinon.stub(UserServices, 'getBalanceUser').resolves(bancoDados);
  });

  after(() => {
    UserServices.getBalanceUser.restore();
  });
  it('Retorna um objeto message', async () => {
    const response = await UserServices.getBalanceUser(99);
    expect(response).to.have.property('message');
  });
  it('Retorna um objeto message com conteúdo', async () => {
    const response = await UserServices.getBalanceUser(99);
    expect(response).to.have.property('message').contain('Conta não econtrada');
  });
});

describe('(camada service) Testa o retorno da API para o deposito da conta clientes', () => {
  const bancoDados = { codCliente: 2, codCorretora: 2, balance: 5000 };

  before(async () => {
    sinon.stub(UserServices, 'depositUser').resolves(bancoDados);
  });

  after(() => {
    UserServices.depositUser.restore();
  });
  it('Retorna um objeto com 3 propriedades', async () => {
    const response = await UserServices.depositUser();
    expect(response).to.have.property('balance');
    expect(response).to.have.property('codCliente');
    expect(response).to.have.property('codCorretora');
  });
});

describe('(camada service) Testa o retorno da API para o deposito invalido da conta clientes', () => {
  const bancoDados = { message: 'Valor inválido' };

  before(async () => {
    sinon.stub(UserServices, 'depositUser').resolves(bancoDados);
  });

  after(() => {
    UserServices.depositUser.restore();
  });
  it('Retorna um objeto message', async () => {
    const response = await UserServices.depositUser();
    expect(response).to.have.property('message');
  });
  it('Retorna um objeto message com conteúdo', async () => {
    const response = await UserServices.depositUser();
    expect(response).to.have.property('message').contain('Valor inválido');
  });
});

describe('(camada service) Testa o retorno da API para o deposito em uma conta invalida', () => {
  const bancoDados = { message: 'Conta inválida' };

  before(async () => {
    sinon.stub(UserServices, 'depositUser').resolves(bancoDados);
  });

  after(() => {
    UserServices.depositUser.restore();
  });
  it('Retorna um objeto message', async () => {
    const response = await UserServices.depositUser();
    expect(response).to.have.property('message');
  });
  it('Retorna um objeto message com conteúdo', async () => {
    const response = await UserServices.depositUser();
    expect(response).to.have.property('message').contain('Conta inválida');
  });
});

describe('(camada service) Testa o retorno da API para o deposito em uma conta invalida', () => {
  const bancoDados = { balance: 3000, codCliente: 2, codCorretora: 2 };

  before(async () => {
    sinon.stub(UserServices, 'withdrawUser').resolves(bancoDados);
  });

  after(() => {
    UserServices.withdrawUser.restore();
  });
  it('Retorna um objeto com 3 chaves', async () => {
    const response = await UserServices.withdrawUser();
    expect(response).to.have.property('balance');
    expect(response).to.have.property('codCliente');
    expect(response).to.have.property('codCorretora');
  });
});

describe('(camada service) Testa o retorno da API para o saque em uma conta invalida', () => {
  const bancoDados = { message: 'Conta inválida' };

  before(async () => {
    sinon.stub(UserServices, 'withdrawUser').resolves(bancoDados);
  });

  after(() => {
    UserServices.withdrawUser.restore();
  });

  it('Retorna um objeto message', async () => {
    const response = await UserServices.withdrawUser();
    expect(response).to.have.property('message');
  });

  it('Retorna um objeto message com conteúdo', async () => {
    const response = await UserServices.withdrawUser();
    expect(response).to.have.property('message').contain('Conta inválida');
  });
});

describe('(camada service) Testa o retorno da API para o saque com valor invalido', () => {
  const bancoDados = { message: 'Valor inválido' };

  before(async () => {
    sinon.stub(UserServices, 'withdrawUser').resolves(bancoDados);
  });

  after(() => {
    UserServices.withdrawUser.restore();
  });

  it('Retorna um objeto message', async () => {
    const response = await UserServices.withdrawUser();
    expect(response).to.have.property('message');
  });

  it('Retorna um objeto message com conteúdo', async () => {
    const response = await UserServices.withdrawUser();
    expect(response).to.have.property('message').contain('Valor inválido');
  });
});

describe('(camada service) Testa o retorno da API para o saque com valor menor ou igual a 0', () => {
  const bancoDados = { message: 'Valor inválido' };

  before(async () => {
    sinon.stub(UserServices, 'withdrawUser').resolves(bancoDados);
  });

  after(() => {
    UserServices.withdrawUser.restore();
  });

  it('Retorna um objeto message', async () => {
    const response = await UserServices.withdrawUser();
    expect(response).to.have.property('message');
  });

  it('Retorna um objeto message com conteúdo', async () => {
    const response = await UserServices.withdrawUser();
    expect(response).to.have.property('message').contain('Valor inválido');
  });
});
