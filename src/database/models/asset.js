const Asset = (Sequelize, DataTypes) => {
  const assetTable = Sequelize.define('Asset', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    value: DataTypes.DECIMAL(10,2),
    codCorretora:DataTypes.INTEGER,
  },
  {
    timestamps: false,
  });
  assetTable.associate = (models) => {
    assetTable.belongsTo(models.Broker, {foreignKey: 'id', as: 'broker'})
    assetTable.belongsTo(models.Investment, {foreignKey: 'id', as: 'investment'})
  }
  return assetTable;
};

module.exports = Asset;