module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Investments',
    [
      { 
        codCliente:1,
        codAtivo:1,
        qtdeAtivo:20,
      },
      { 
        codCliente:1,
        codAtivo:2,
        qtdeAtivo:10,
      },
      { 
        codCliente:1,
        codAtivo:3,
        qtdeAtivo:15,
      },
      { 
        codCliente:2,
        codAtivo:1,
        qtdeAtivo:40,
      },
      { 
        codCliente:2,
        codAtivo:2,
        qtdeAtivo:85,
      },
      { 
        codCliente:2,
        codAtivo:3,
        qtdeAtivo:43,
      },
    ],

    { timestamps: false },
  ),

  down: async (queryInterface) => queryInterface.bulkDelete('investments', null, {}),
};
