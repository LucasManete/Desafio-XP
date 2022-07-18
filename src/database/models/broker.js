const Broker = (Sequelize, DataTypes) => {
  const brokerTable = Sequelize.define('Broker', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Name: DataTypes.STRING,
    Cnpj: DataTypes.INTEGER
  });
  brokerTable.associate = (models) => {
    //conferir
   brokerTable.hasMany(models.Assets, {foreignKey: 'id', as: 'Assets'})
   brokerTable.hasMany(models.UserAcont, {foreignKey: 'id', as: 'UserAconts'})
  }
  return brokerTable;
};

module.exports = Broker;