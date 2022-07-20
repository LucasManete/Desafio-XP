module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Investments',
    [
      { 
        qtdeAtivo:100,
        codCliente:1,
        codAtivo:1,
      },
      { 
        qtdeAtivo:100,
        codCliente:1,
        codAtivo:2,
      },
      { 
        qtdeAtivo:100,
        codCliente:1,
        codAtivo:3,
      },
      { 
        qtdeAtivo:10,
        codCliente:2,
        codAtivo:1,
      },
      { 
        qtdeAtivo:120,
        codCliente:2,
        codAtivo:2,
      },
      { 
        qtdeAtivo:50,
        codCliente:2,
        codAtivo:3,
      },
    ],

    { timestamps: false },
  ),

  down: async (queryInterface) => queryInterface.bulkDelete('investments', null, {}),
};
