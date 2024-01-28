"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    static associate(models) {
      Book.belongsTo(models.Author, {
        foreignKey: "AuthorId",
      });

      Book.belongsTo(models.Category, {
        foreignKey: "CategoryId",
      });

      Book.belongsToMany(models.User, {
        through: models.Favorites,
        foreignKey: "BookId",
      });

      Book.hasMany(models.Favorites, {
        foreignKey: "BookId",
        as: "Buku",
      });
    }
  }
  Book.init(
    {
      title: DataTypes.STRING,
      publicationYear: DataTypes.STRING,
      countPage: DataTypes.INTEGER,
      rating: DataTypes.FLOAT,
      image: DataTypes.STRING,
      CategoryId: DataTypes.UUID,
      AuthorId: DataTypes.UUID,
    },
    {
      sequelize,
      modelName: "Book",
    }
  );
  return Book;
};
