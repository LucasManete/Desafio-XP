module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Investments',
    [
      {
        valor: 45,
        codCliente:1,
        codAtivo:2,
      },
      {
        valor: 5478,
        codCliente:2,
        codAtivo:1,
      },
    ],

    { timestamps: false },
  ),

  down: async (queryInterface) => queryInterface.bulkDelete('investments', null, {}),
};
