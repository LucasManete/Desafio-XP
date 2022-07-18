module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Investments',
    [
      {
        valor: 45,
        codCliente:1,
        codAtivo:2,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        valor: 5478,
        codCliente:2,
        codAtivo:1,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ],

    {},
  ),

  down: async (queryInterface) => queryInterface.bulkDelete('investments', null, {}),
};
