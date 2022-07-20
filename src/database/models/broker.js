
const Broker = (Sequelize, DataTypes) => {
  const brokerTable = Sequelize.define('Broker', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    cnpj: DataTypes.INTEGER
  },  { timestamps: false });
  brokerTable.associate = (models) => {
    //conferir
   brokerTable.hasMany(models.Asset, {foreignKey: 'id', as: 'asset'})
   brokerTable.hasMany(models.UserAcont, {foreignKey: 'id', as: 'useraconts'})
  }
  return brokerTable;
};

module.exports = Broker;