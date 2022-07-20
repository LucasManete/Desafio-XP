module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Users',
    [
      {
        name: 'Lucas',
        email: 'lucas_teste@gmail.com',
        password: '123456teste',
        document: 45484,
      },
      {
        name: 'Teste',
        email: 'teste_teste@gmail.com',
        password: '123456teste',
        document: 46484,
      },
    ],

    { timestamps: false },
  ),

  down: async (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};