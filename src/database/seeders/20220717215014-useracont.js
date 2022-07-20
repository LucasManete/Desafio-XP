module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'UserAconts',
    [
      {
        balance: 4220.30,
        codCliente:1,
        codCorretora:2,
      },
      {
        balance: 4000.30,
        codCliente:2,
        codCorretora:2,
      },
    ],

    { timestamps: false },
  ),

  down: async (queryInterface) => queryInterface.bulkDelete('userAconts', null, {}),
};
