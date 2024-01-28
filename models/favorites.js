"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Favorites extends Model {
    static associate(models) {
      Favorites.belongsTo(models.User, {
        foreignKey: "UserId",
      });

      Favorites.belongsTo(models.Book, {
        foreignKey: "BookId",
      });
    }
  }
  Favorites.init(
    {
      UserId: DataTypes.UUID,
      BookId: DataTypes.UUID,
    },
    {
      sequelize,
      modelName: "Favorites",
    }
  );
  return Favorites;
};
