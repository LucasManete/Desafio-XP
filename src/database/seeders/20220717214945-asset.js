module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Assets',
    [
      {
        name: 'Azul',
        quantity: 542,
        value: 75,
        codCorretora:2,
      },
      {
        name: 'XP',
        quantity: 500,
        value: 500,
        codCorretora:2,
      },
      {
        name: 'Petrobras',
        quantity: 300,
        value: 65,
        codCorretora:2,
      },
    ],

    { timestamps: false },
  ),

  down: async (queryInterface) => queryInterface.bulkDelete('assets', null, {}),
};