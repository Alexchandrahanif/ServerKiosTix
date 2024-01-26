const { Category } = require("../models");

class Controller {
  // GET ALL
  static async getAll(req, res, next) {
    try {
      const dataCategory = await Category.findAll();

      res.status(200).json({
        statusCode: 200,
        message: "Berhasil Menampilkan Data Category",
        dataCategory,
      });
    } catch (error) {
      next(error);
    }
  }

  // GET ONE
  static async getOne(req, res, next) {
    try {
      const { id } = req.params;

      const dataCategory = await Category.findOne({
        where: {
          id,
        },
      });

      if (!dataCategory) {
        throw { name: "Id Category Tidak Ditemukan" };
      }

      res.status(200).json({
        statusCode: 200,
        message: "Berhasil Menampilkan Data Category",
        dataCategory,
      });
    } catch (error) {
      next(error);
    }
  }

  // CREATE
  static async create(req, res, next) {
    try {
      const { name } = req.body;

      const body = {
        name,
      };

      const dataCategory = await Category.create(body);

      res.status(201).json({
        statusCode: 201,
        message: "Berhasil Membuat Data Category Baru",
        data: dataCategory,
      });
    } catch (error) {
      next(error);
    }
  }

  // UPDATE
  static async update(req, res, next) {
    try {
      const { id } = req.params;
      const { name } = req.body;

      const dataCategory = await Category.findOne({
        where: {
          id,
        },
      });

      if (!dataCategory) {
        throw { name: "Id Category Tidak Ditemukan" };
      }

      const body = {
        name,
      };

      await Category.update(body, { where: { id } });

      res.status(200).json({
        statusCode: 200,
        message: "Berhasil Memperbaharui Data Category",
      });
    } catch (error) {
      next(error);
    }
  }

  // DELETE
  static async delete(req, res, next) {
    try {
      const { id } = req.params;

      const dataCategory = await Category.findOne({
        where: {
          id,
        },
      });

      if (!dataCategory) {
        throw { name: "Id Category Tidak Ditemukan" };
      }

      await Category.destroy({ where: { id } });

      res.status(200).json({
        statusCode: 200,
        message: "Berhasil Menghapus Data Category",
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;
