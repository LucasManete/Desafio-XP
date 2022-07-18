module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Users',
    [
      {
        name: 'Lucas',
        document: 45484,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        name: 'Gabriel',
        document: 54782,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ],

    {},
  ),

  down: async (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};