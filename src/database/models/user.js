const User = (Sequelize, DataTypes) => {
  const userTable = Sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Name: DataTypes.STRING,
    Document: DataTypes.INTEGER
  });
  userTable.associate = (models) => {
    User.hasMany(models.Investment, {foreignKey: 'id', as: 'Invesments'})
    User.hasOne(models.UserAcont, {foreignKey: 'id', as: 'UserAcont'})
  }
  return userTable;
};

module.exports = User;