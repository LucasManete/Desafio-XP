module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Brokers',
    [
      {
        name: 'XP',
        cnpj: 45484,
      },
      {
        name: 'Binance',
        cnpj: 54782,
      },
      {
        name: 'Binance',
        cnpj: 54782,
      },
    ],{ timestamps: false },
  ),

  down: async (queryInterface) => queryInterface.bulkDelete('Brokers', null, {}),
};
