const Asset = (Sequelize, DataTypes) => {
  const assetTable = Sequelize.define('Asset', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Name: DataTypes.STRING,
    Quantity: DataTypes.INTEGER,
    valor: DataTypes.DECIMAL,
    codCorretora:DataTypes.INTEGER,
  });
  assetTable.associate = (models) => {
    assetTable.belongsTo(models.Brokers, {foreignKey: 'id', as: 'broker'})
    assetTable.belongsTo(models.Investment, {foreignKey: 'id', as: 'investment'})
  }
  return assetTable;
};

module.exports = Asset;