const { Author } = require("../models");

class Controller {
  // GET ALL
  static async getAll(req, res, next) {
    try {
      const dataAuthor = await Author.findAll();

      res.status(200).json({
        statusCode: 200,
        message: "Berhasil Menampilkan Data Author",
        dataAuthor,
      });
    } catch (error) {
      next(error);
    }
  }

  // GET ONE
  static async getOne(req, res, next) {
    try {
      const { id } = req.params;

      const dataAuthor = await Author.findOne({
        where: {
          id,
        },
      });

      if (!dataAuthor) {
        throw { name: "Id Author Tidak Ditemukan" };
      }

      res.status(200).json({
        statusCode: 200,
        message: "Berhasil Menampilkan Data Author",
        dataAuthor,
      });
    } catch (error) {
      next(error);
    }
  }

  // CREATE
  static async create(req, res, next) {
    try {
      const { displayName, birthYear, placeOfBirth } = req.body;

      const body = {
        displayName,
        birthYear,
        placeOfBirth,
      };

      const dataAuthor = await Author.create(body);

      res.status(201).json({
        statusCode: 201,
        message: "Berhasil Membuat Data Author Baru",
        data: dataAuthor,
      });
    } catch (error) {
      next(error);
    }
  }

  // UPDATE
  static async update(req, res, next) {
    try {
      const { id } = req.params;
      const { displayName, birthYear, placeOfBirth } = req.body;

      const dataAuthor = await Author.findOne({
        where: {
          id,
        },
      });

      if (!dataAuthor) {
        throw { name: "Id Author Tidak Ditemukan" };
      }

      const body = {
        displayName,
        birthYear,
        placeOfBirth,
      };

      await Author.update(body, { where: { id } });

      res.status(200).json({
        statusCode: 200,
        message: "Berhasil Memperbaharui Data Author",
      });
    } catch (error) {
      next(error);
    }
  }

  // DELETE
  static async delete(req, res, next) {
    try {
      const { id } = req.params;

      const dataAuthor = await Author.findOne({
        where: {
          id,
        },
      });

      if (!dataAuthor) {
        throw { name: "Id Author Tidak Ditemukan" };
      }

      await Author.destroy({ where: { id } });

      res.status(200).json({
        statusCode: 200,
        message: "Berhasil Menghapus Data Author",
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;
