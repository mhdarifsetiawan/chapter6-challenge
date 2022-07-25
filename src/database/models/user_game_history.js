"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User_game_history extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User_game_history.belongsTo(models.User_game, {
        foreignKey: "userId",
        onDelete: "CASCADE",
      });
    }
  }
  User_game_history.init(
    {
      last_time_played: DataTypes.STRING,
      last_score: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "User_game_history",
    }
  );
  return User_game_history;
};
