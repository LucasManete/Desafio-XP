// /* eslint-disable no-undef */
// const sinon = require('sinon');
// const { expect } = require('chai');

// const acontController = require('../../../controllers/acontUser.controller');
// const acontServices = require('../../../services/acontUser.services');

// describe('(camada controller) Verifica getBalanceUser', async () => {
//   const response = {};
//   const request = { params: { id: 1 } };
//   const bancoDados = {
//     codCliente: 1,
//     Saldo: 4000,
//   };
//   before(() => {
//     response.status = sinon.stub().returns(response);
//     response.json = sinon.stub().returns();

//     sinon.stub(acontServices, 'getBalanceUser').resolves(bancoDados);
//   });

//   after(() => {
//     acontServices.getBalanceUser.restore();
//   });

//   it('Retorna o "status 200"', async () => {
//     await acontController.getAcontUserController(request, response);
//     expect(response.status.calledWith(200)).to.be.equal(true);
//   });

//   it('Retorna um objeto', async () => {
//     await acontController.getAcontUserController(request, response);

//     expect(response.json.calledWith(sinon.match.object)).to.be.equal(true);
//   });
// });

// describe('(camada controller) Verifica getBalanceUser', async () => {
//   const response = { message: 'Conta inválida' };
//   const request = { params: { id: 1 } };
//   before(async () => {
//     response.status = sinon.stub().returns(response);
//     response.json = sinon.stub().returns();

//     sinon.stub(acontServices, 'getBalanceUser').resolves(request);
//   });

//   after(() => {
//     acontServices.getBalanceUser.restore();
//   });

//   it('Retorna o "status 404"', async () => {
//     const teste = await acontController.getAcontUserController(request, response);
//     expect(response.status.calledWith(404)).to.be.equal(true);
//   });

//   it('Retorna um objeto', async () => {
//     await acontController.getAcontUserController(request, response);

//     expect(response.json.calledWith(sinon.match.object)).to.be.equal(true);
//   });
// });
