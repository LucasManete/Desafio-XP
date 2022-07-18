const investment = (Sequelize, DataTypes) => {
  const investmentTable = Sequelize.define('Investment', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Valor: DataTypes.INTEGER,
    codCliente: DataTypes.INTEGER,
    codAtivo: DataTypes.INTEGER
  });
  investmentTable.associate = (models) => {
    investmentTable.hasOne(models.Assets, {foreignKey: 'id', as: 'Assets'})
    investmentTable.belongsTo(models.User, {foreignKey: 'id', as: 'Users'} )
  }

  return investmentTable;
};

module.exports = investment;