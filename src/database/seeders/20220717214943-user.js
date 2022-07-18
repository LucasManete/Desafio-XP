module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Users',
    [
      {
        name: 'Lucas',
        document: 45484,
      },
      {
        name: 'Gabriel',
        document: 54782,
      },
    ],

    { timestamps: false },
  ),

  down: async (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};