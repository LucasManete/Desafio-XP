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
  }, { timestamps: false });
  investmentTable.associate = (models) => {
    investmentTable.hasOne(models.Asset, {foreignKey: 'id', as: 'asset'})
    investmentTable.belongsTo(models.User, {foreignKey: 'id', as: 'user'} )
  }

  return investmentTable;
};

module.exports = investment;