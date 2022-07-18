module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Assets',
    [
      {
        name:"Rico",
        quantity: 15,
        valor: 45,
        codCorretora:2,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        name:"XP",
        quantity: 25,
        valor: 150,
        codCorretora:2,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ],

    {},
  ),

  down: async (queryInterface) => queryInterface.bulkDelete('assets', null, {}),
};