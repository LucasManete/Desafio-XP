
const User = (Sequelize, DataTypes) => {
  const userTable = Sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Name: DataTypes.STRING,
    Document: DataTypes.INTEGER
  }, { timestamps: false });
  userTable.associate = (models) => {
    models.User.hasMany(models.Investment, {foreignKey: 'id', as: 'investment'})
    models.User.hasOne(models.UserAcont, {foreignKey: 'id', as: 'useracont'})
  }
  return userTable;
};

module.exports = User;