const { Favorites, User, Book } = require("../models");

class Controller {
  static async getAll(req, res, next) {
    try {
      const { id } = req.user;
      const dataFavorite = await Favorites.findAll({
        include: [
          {
            model: User,
            where: {
              id,
            },
          },
          {
            model: Book,
          },
        ],
      });

      res.status(200).json({
        statusCode: 200,
        message: "Berhasil Menampilkan Data Favorite",
        data: dataFavorite,
      });
    } catch (error) {
      next(error);
    }
  }

  // CREATE
  static async create(req, res, next) {
    try {
      const { BookId } = req.body;

      const body = {
        UserId: req.user.id,
        BookId,
      };

      const data = await Favorites.findOne({
        where: {
          UserId: req.user.id,
          BookId,
        },
        include: [
          {
            model: Book,
          },
        ],
      });

      if (data) {
        throw {
          name: "Buku Sudah Terdaftar DI Favorite",
          buku: data.Book.title,
        };
      }

      const dataFavorite = await Favorites.create(body);

      res.status(201).json({
        statusCode: 201,
        message: "Berhasil Membuat Data Favorite Baru",
        data: dataFavorite,
      });
    } catch (error) {
      next(error);
    }
  }

  // DELETE
  static async delete(req, res, next) {
    try {
      const { id } = req.params;

      const dataFavorite = await Favorites.findOne({
        where: {
          id,
        },
      });

      if (!dataFavorite) {
        throw { name: "Id Favorite Tidak Ditemukan" };
      }

      await Favorites.destroy({ where: { id } });

      res.status(200).json({
        statusCode: 200,
        message: "Berhasil Menghapus Data Favorite",
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;
