module.exports = function(sequelize, DataTypes) {
  var User_info = sequelize.define("User_info", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
        password: DataTypes.STRING,
        phoneNumber: DataTypes.INETEGER(10),
        token: DataTypes.STRING
    });

  return User_info;
};
