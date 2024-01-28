const formatPhoneNumber = require("../helper/formatPhoneNumber");
const {
  comparePassword,
  createAccessToken,
  hashingPassword,
} = require("../helper/helper");
const { User } = require("../models");

class Controller {
  // REGISTER
  static async register(req, res, next) {
    try {
      const { username, email, password, phoneNumber, address } = req.body;

      const body = {
        username,
        email,
        password,
        phoneNumber: formatPhoneNumber(phoneNumber),
        address,
        role: "MEMBER",
      };

      const dataUser = await User.create(body);

      res.status(201).json({
        statusCode: 201,
        message: "Selamat Anda Berhasil Register",
        data: dataUser,
      });
    } catch (error) {
      next(error);
    }
  }

  // LOGIN
  static async login(req, res, next) {
    try {
      const { email, password } = req.body;

      if (!email) {
        throw { name: "Mohon Masukkan Email" };
      }
      if (!password) {
        throw { name: "Mohon Masukkan Password" };
      }

      const dataUser = await User.findOne({
        where: {
          email,
        },
      });

      if (!dataUser) {
        throw { name: "Email/Password Salah" };
      }

      if (!comparePassword(password, dataUser.password)) {
        throw { name: "Email/Password Salah" };
      }

      const payload = {
        id: dataUser.id,
        email: dataUser.email,
      };

      const authorization = createAccessToken(payload);

      res.status(200).json({
        statusCode: 200,
        message: `Selamat Datang ${dataUser.username}`,
        authorization: authorization,
        username: dataUser.username,
        role: dataUser.role,
      });
    } catch (error) {
      next(error);
    }
  }

  // GET ALL
  static async getAll(req, res, next) {
    try {
      const dataUser = await User.findAll({
        attributes: {
          exclude: "password",
        },
      });

      res.status(200).json({
        statusCode: 200,
        message: "Berhasil Menampilkan Data User",
        dataUser,
      });
    } catch (error) {
      next(error);
    }
  }

  // GET PROFILE
  static async getProfile(req, res, next) {
    try {
      const { id } = req.user;

      const dataUser = await User.findOne({
        where: {
          id,
        },
        attributes: {
          exclude: "password",
        },
      });

      if (!dataUser) {
        throw { name: "Id User Tidak Ditemukan" };
      }

      res.status(200).json({
        statusCode: 200,
        message: "Berhasil Menampilkan Data User",
        dataUser,
      });
    } catch (error) {
      next(error);
    }
  }

  // GET ONE
  static async getOne(req, res, next) {
    try {
      const { id } = req.params;

      const dataUser = await User.findOne({
        where: {
          id,
        },
        attributes: {
          exclude: "password",
        },
      });

      if (!dataUser) {
        throw { name: "Id User Tidak Ditemukan" };
      }

      res.status(200).json({
        statusCode: 200,
        message: "Berhasil Menampilkan Data User",
        dataUser,
      });
    } catch (error) {
      next(error);
    }
  }

  // UPDATE
  static async update(req, res, next) {
    try {
      const { id } = req.params;
      const { username, phoneNumber, address } = req.body;

      const dataUser = await User.findOne({
        where: {
          id,
        },
      });

      if (!dataUser) {
        throw { name: "Id User Tidak Ditemukan" };
      }

      const body = {
        username,
        phoneNumber: formatPhoneNumber(phoneNumber),
        address,
      };

      await User.update(body, { where: { id } });

      res.status(200).json({
        statusCode: 200,
        message: "Berhasil Memperbaharui Data User",
      });
    } catch (error) {
      next(error);
    }
  }

  // UPDATE PASSWORD
  static async updatePassword(req, res, next) {
    try {
      const { id } = req.params;
      const { oldPassword, newPassword, confirmPassword } = req.body;

      const dataUser = await User.findOne({
        where: {
          id,
        },
      });
      const dataPassword = await User.findOne({
        where: {
          password: oldPassword,
        },
      });

      if (!dataUser) {
        throw { name: "Id User Tidak Ditemukan" };
      }

      if (!oldPassword || oldPassword == "") {
        throw { name: "Mohon Masukkan Password Lama Anda" };
      }

      if (!newPassword || newPassword == "") {
        throw { name: "Mohon Masukkan Password Baru Anda" };
      }

      if (!confirmPassword || confirmPassword == "") {
        throw { name: "Mohon Masukkan Konfirmasi Password Anda" };
      }

      if (confirmPassword !== newPassword) {
        throw { name: "Konfirmasi Password Anda Tidak Cocok" };
      }

      if (!comparePassword(oldPassword, dataUser.password)) {
        throw { name: "Password Lama Anda Salah" };
      }

      await User.update(
        { password: hashingPassword(newPassword) },
        { where: { id } }
      );

      res.status(200).json({
        statusCode: 200,
        message: "Berhasil Memperbaharui Password User",
      });
    } catch (error) {
      next(error);
    }
  }

  // DELETE
  static async delete(req, res, next) {
    try {
      const { id } = req.params;

      const dataUser = await User.findOne({
        where: {
          id,
        },
      });

      if (!dataUser) {
        throw { name: "Id User Tidak Ditemukan" };
      }

      await User.destroy({ where: { id } });

      res.status(200).json({
        statusCode: 200,
        message: "Berhasil Menghapus Data User",
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;
