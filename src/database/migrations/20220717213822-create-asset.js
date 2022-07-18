'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Assets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Name: {
        type: Sequelize.STRING
      },
      Quantity: {
        type: Sequelize.INTEGER
      },
      valor: {
        type: Sequelize.INTEGER
      },
      codCorretora: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Brokers',
          key: 'id'
        },
        onDelete:'CASCADE',
        onUpdate: 'CASCADE',
        primaryKey: true
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Assets');
  }
};