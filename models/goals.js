module.exports = function (sequelize, DataTypes) {
  var Goal = sequelize.define("Goal", {
    goal: DataTypes.STRING,
    remindTime: DataTypes.TIME,
    progressCheck: DataTypes.TIME,
    completed: DataTypes.BOOLEAN,
    token: DataTypes.STRING
  });
  // Goal.associate = function (models) {

  // }
  return Goal;
};
