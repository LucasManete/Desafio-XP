
const userAcont = (Sequelize, DataTypes) => {
  const UserAcontTable = Sequelize.define('UserAcont', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    codCliente: DataTypes.INTEGER,
    codCorretora: DataTypes.INTEGER,
    balance: DataTypes.DECIMAL(10,2),
  }, { timestamps: false }); 

  
  UserAcontTable.associate = (models) => {
    UserAcontTable.belongsTo(models.User, {foreignKey: 'id', as: 'user'})
    UserAcontTable.belongsToMany(models.Broker, {
      as: 'broker',
      foreignKey: 'id', 
      through: UserAcontTable,
      otherKey:'id'
    })
  }
  return UserAcontTable;
};

module.exports = userAcont;