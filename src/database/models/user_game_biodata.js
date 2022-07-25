"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User_game_biodata extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User_game_biodata.belongsTo(models.User_game, {
        foreignKey: "userId",
        onDelete: "CASCADE",
      });
    }
  }
  User_game_biodata.init(
    {
      nama: DataTypes.STRING,
      email: DataTypes.STRING,
      address: DataTypes.TEXT,
      phone: DataTypes.BIGINT,
      dob: DataTypes.STRING,
      gender: DataTypes.STRING,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "User_game_biodata",
    }
  );
  return User_game_biodata;
};
