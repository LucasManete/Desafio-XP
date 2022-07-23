
const User = (Sequelize, DataTypes) => {
  const userTable = Sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    document: DataTypes.STRING
  }, { timestamps: false });
  userTable.associate = (models) => {
    models.User.hasMany(models.Investment, {foreignKey: 'id', as: 'investment'})
    models.User.hasOne(models.UserAcont, {foreignKey: 'id', as: 'useracont'})
  }
  return userTable;
};

module.exports = User;