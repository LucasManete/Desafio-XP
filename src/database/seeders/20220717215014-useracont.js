module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'UserAconts',
    [
      {
        balance: 45484,
        codCliente:1,
        codCorretora:2,
      },
      {
        balance: 54,
        codCliente:2,
        codCorretora:2,
      },
    ],

    { timestamps: false },
  ),

  down: async (queryInterface) => queryInterface.bulkDelete('userAconts', null, {}),
};
