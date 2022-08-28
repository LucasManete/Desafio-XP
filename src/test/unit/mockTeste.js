const acontUserMock = {
  dataValues: {
    codCliente: 1,
    codCorretora: 2,
    balance: 4220,
  },
};

const newValue = {
  codCliente: 1,
  codCorretora: 2,
  balance: 4230,
};

const errorAcontMock = { status: 404, message: 'Conta inválida' };

const assetsMock = [
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

const allInvestmentsMock = [
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

const mockAsset = {
  dataValues: {
    id: 1, quantity: 542, value: '75.00',
  },
};

const mockBalance = {
  dataValues: {
    id: 1, balance: '10',
  },
};

const mockBalanceOK = {
  dataValues: {
    id: 1, balance: '5421',
  },
};

const mockQtdAsset = {
  dataValues: {
    id: 1, qtdeAtivo: 10,
  },
};

const mockVenda = {
  dataValues: { id: 1, qtdeAtivo: 0 },
};

module.exports = {
  acontUserMock,
  errorAcontMock,
  newValue,
  assetsMock,
  allInvestmentsMock,
  mockAsset,
  mockBalance,
  mockQtdAsset,
  mockVenda,
  mockBalanceOK,
};
