'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Investments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      qtdeAtivo: {
        type: Sequelize.INTEGER
      },
      codCliente: {
        type: Sequelize.INTEGER,
        references: {
          model:'Users',
          key:'id'
        },
        onDelete:'CASCADE',
        onUpdate: 'CASCADE',
        primaryKey: true
      },
      codAtivo: {
        type: Sequelize.INTEGER,
        references: {
          model:'Assets',
          key:'id'
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
    await queryInterface.dropTable('Investments');
  }
};