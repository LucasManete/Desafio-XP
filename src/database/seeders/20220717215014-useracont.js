module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'UserAconts',
    [
      {
        balance: 45484,
        codCliente:1,
        codCorretora:2,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        balance: 54,
        codCliente:2,
        codCorretora:2,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ],

    {},
  ),

  down: async (queryInterface) => queryInterface.bulkDelete('userAconts', null, {}),
};
