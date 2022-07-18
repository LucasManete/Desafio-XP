const userAcont = (Sequelize, DataTypes) => {
  const UserAcontTable = Sequelize.define('UserAcont', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Balance: DataTypes.INTEGER,
    codCliente: DataTypes.INTEGER,
    codCorretora: DataTypes.INTEGER,
  }); 
  UserAcontTable.associate = (models) => {
    UserAcontTable.belongsTo(models.User, {foreignKey: 'id', as: 'Users'})
    UserAcontTable.belongsToMany(models.Broker, {foreignKey: 'id', as: 'Brokers'})
  }
  return UserAcontTable;
};

module.exports = userAcont;