module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Brokers',
    [
      {
        name: 'XP',
        cnpj: 45484,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        name: 'Binance',
        cnpj: 54782,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ],

    {},
  ),

  down: async (queryInterface) => queryInterface.bulkDelete('Brokers', null, {}),
};
