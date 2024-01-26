"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
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
  return User;
};
