module.exports = function (sequelize, DataTypes) {
  var Goal = sequelize.define("Goal", {
    goal: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // remindTime: {
    //   type: DataTypes.TIME,
    //   allowNull: true
    // },
    // progressCheck: {
    //   type: DataTypes.TIME,
    //   allowNull: false
    // },
    goalDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  },
    {
      timestamps: false
    })

  Goal.associate = function (models) {
    Goal.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Goal;
};
