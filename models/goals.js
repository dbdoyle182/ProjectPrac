module.exports = function(sequelize, DataTypes) {
  var Goal = sequelize.define("Goal", {
    goal: {
      type: DataTypes.STRING,
      allowNull: false
    },
    remindTime: {
      type: DataTypes.TIME,
      allowNull: true
    },
    progressCheck: {
      type: DataTypes.TIME,
      allowNull: false
    },
    completed: {
      type: DataTypes.BOOLEAN,
      default: false
    }
  });
  // Goal.associate = function (models) {

  // }

  Goal.associate = function(models) {
    Goal.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Goal;
};
