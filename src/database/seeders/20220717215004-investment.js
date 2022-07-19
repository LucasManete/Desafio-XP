module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Investments',
    [
      {
        valor: 45,
        codCliente:1,
        codAtivo:2,
        qtdeAtivo:20,
      },
      {
        valor: 5478,
        codCliente:2,
        codAtivo:1,
        qtdeAtivo:10,
      },
      {
        valor: 75,
        codCliente:1,
        codAtivo:1,
        qtdeAtivo: 15,
      },
      {
        valor: 75,
        codCliente:2,
        codAtivo:2,
        qtdeAtivo: 15,
      },
    ],

    { timestamps: false },
  ),

  down: async (queryInterface) => queryInterface.bulkDelete('investments', null, {}),
};
