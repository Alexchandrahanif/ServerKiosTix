"use strict";
const { Model } = require("sequelize");
const { hashingPassword } = require("../helper/helper");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.belongsToMany(models.Book, {
        through: models.Favorites,
        foreignKey: "BookId",
      });
    }
  }
  User.init(
    {
      username: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          msg: "Email sudah terdaftar!",
        },
        validate: {
          notEmpty: {
            msg: "Email tidak boleh kosong!",
          },
          notNull: {
            msg: "Email tidak boleh kosong!",
          },
          isEmail: {
            msg: "Must Format Email",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Password tidak boleh kosong!",
          },
          notNull: {
            msg: "Password tidak boleh kosong!",
          },
        },
      },
      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          msg: "Nomor telepon sudah terdaftar!",
        },
        validate: {
          notEmpty: {
            msg: "Nomor telepon tidak boleh kosong!",
          },
          notNull: {
            msg: "Nomor telepon tidak boleh kosong!",
          },
        },
      },
      address: DataTypes.STRING,
      role: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  User.beforeCreate((data) => {
    data.password = hashingPassword(data.password);
  });
  return User;
};
