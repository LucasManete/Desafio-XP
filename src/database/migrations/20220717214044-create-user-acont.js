'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('UserAconts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      balance: {
        type: Sequelize.INTEGER
      },
      codCliente: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id'
        },
        onDelete:'CASCADE',
        onUpdate: 'CASCADE',
        primaryKey: true
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
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('UserAconts');
  }
};