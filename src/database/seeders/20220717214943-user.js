module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Users',
    [
      {
        name: 'Lucas',
        document: 45484,
      },
      {
        name: 'Teste',
        document: 46484,
      },
    ],

    { timestamps: false },
  ),

  down: async (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};