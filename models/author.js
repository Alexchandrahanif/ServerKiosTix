"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Author extends Model {
    static associate(models) {
      Author.hasMany(models.Book, {
        foreignKey: "AuthorId",
      });
    }
  }
  Author.init(
    {
      displayName: DataTypes.STRING,
      birthYear: DataTypes.STRING,
      placeOfBirth: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Author",
    }
  );
  return Author;
};
