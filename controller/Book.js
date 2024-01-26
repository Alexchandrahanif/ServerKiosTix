const remove = require("../helper/removeFile");
const { Book, Category, Author } = require("../models");

class Controller {
  // GET ALL BY AUTHOR ID
  static async getAllByAuhorId(req, res, next) {
    try {
      const { AuthorId } = req.params;
      const { limit, page, search, tanggal } = req.query;

      let pagination = {
        wherr: {
          AuthorId,
        },
        include: [
          {
            model: Category,
          },
          {
            model: Author,
          },
        ],
        order: [["createdAt", "DESC"]],
        limit: limit ? limit : 50,
      };

      const dataPenulis = await Author.findOne({
        where: {
          id: AuthorId,
        },
      });

      if (!dataPenulis) {
        throw { name: "Id Penulis Tidak Ditemukan" };
      }

      if (limit) {
        pagination.limit = limit;
      }

      if (page && limit) {
        pagination.offset = (page - 1) * limit;
      }

      if (search) {
        pagination.where = {
          [Op.or]: [{ title: { [Op.iLike]: `%${search}%` } }],
        };
      }

      if (tanggal) {
        const pagi = moment().format(`${tanggal} 00:00`);
        const masuk = moment().format(`${tanggal} 23:59`);
        pagination.where = {
          createdAt: {
            [Op.between]: [pagi, masuk],
          },
        };
      }

      let dataBuku = await Book.findAndCountAll(pagination);

      let totalPage = Math.ceil(dataBuku.count / (limit ? limit : 50));

      res.status(200).json({
        statusCode: 200,
        message: "Berhasil Menampilkan Semua Data Buku",
        data: dataBuku.rows,
        totaldataBuku: dataBuku.count,
        totalPage: totalPage,
      });
    } catch (error) {
      next(error);
    }
  }

  // GET ALL BY CATEGORY ID
  static async getAllByCategoryId(req, res, next) {
    try {
      const { CategoryId } = req.params;
      const { limit, page, search, tanggal } = req.query;

      let pagination = {
        wherr: {
          CategoryId,
        },
        include: [
          {
            model: Category,
          },
          {
            model: Author,
          },
        ],
        order: [["createdAt", "DESC"]],
        limit: limit ? limit : 50,
      };

      const dataCategory = await Category.findOne({
        where: {
          id: CategoryId,
        },
      });

      if (!dataCategory) {
        throw { name: "Id Category Tidak Ditemukan" };
      }

      if (limit) {
        pagination.limit = limit;
      }

      if (page && limit) {
        pagination.offset = (page - 1) * limit;
      }

      if (search) {
        pagination.where = {
          [Op.or]: [{ title: { [Op.iLike]: `%${search}%` } }],
        };
      }

      if (tanggal) {
        const pagi = moment().format(`${tanggal} 00:00`);
        const masuk = moment().format(`${tanggal} 23:59`);
        pagination.where = {
          createdAt: {
            [Op.between]: [pagi, masuk],
          },
        };
      }

      let dataBuku = await Book.findAndCountAll(pagination);

      let totalPage = Math.ceil(dataBuku.count / (limit ? limit : 50));

      res.status(200).json({
        statusCode: 200,
        message: "Berhasil Menampilkan Semua Data Buku",
        data: dataBuku.rows,
        totaldataBuku: dataBuku.count,
        totalPage: totalPage,
      });
    } catch (error) {
      next(error);
    }
  }

  // GET ALL
  static async getAll(req, res, next) {
    try {
      const { limit, page, search, tanggal } = req.query;

      let pagination = {
        include: [
          {
            model: Category,
          },
          {
            model: Author,
          },
        ],
        order: [["createdAt", "DESC"]],
        limit: limit ? limit : 50,
      };

      if (limit) {
        pagination.limit = limit;
      }

      if (page && limit) {
        pagination.offset = (page - 1) * limit;
      }

      if (search) {
        pagination.where = {
          [Op.or]: [{ title: { [Op.iLike]: `%${search}%` } }],
        };
      }

      if (tanggal) {
        const pagi = moment().format(`${tanggal} 00:00`);
        const masuk = moment().format(`${tanggal} 23:59`);
        pagination.where = {
          createdAt: {
            [Op.between]: [pagi, masuk],
          },
        };
      }

      let dataBuku = await Book.findAndCountAll(pagination);

      let totalPage = Math.ceil(dataBuku.count / (limit ? limit : 50));

      res.status(200).json({
        statusCode: 200,
        message: "Berhasil Menampilkan Semua Data Buku",
        data: dataBuku.rows,
        totaldataBuku: dataBuku.count,
        totalPage: totalPage,
      });
    } catch (error) {
      next(error);
    }
  }

  // GET ONE
  static async getOne(req, res, next) {
    try {
      const { id } = req.params;

      const dataBuku = await Book.findOne({
        where: {
          id,
        },
        include: [
          {
            model: Category,
          },
          {
            model: Author,
          },
        ],
      });

      if (!dataBuku) {
        throw { name: "Id Buku Tidak Ditemukan" };
      }

      res.status(200).json({
        statusCode: 200,
        message: "Berhasil Menampilkan Data Buku",
        dataBuku,
      });
    } catch (error) {
      next(error);
    }
  }

  // CREATE
  static async create(req, res, next) {
    try {
      const {
        title,
        publicationYear,
        genre,
        countPage,
        rating,
        AuthorId,
        CategoryId,
      } = req.body;

      const body = {
        title,
        publicationYear,
        genre,
        countPage: +countPage,
        rating,
        image: req.file ? req.file.path : "",
      };

      if (AuthorId) {
        const dataAuthor = await Author.findOne({
          where: {
            id: AuthorId,
          },
        });

        if (!dataAuthor) {
          throw { name: "Id Author Tidak Ditemukan" };
        } else {
          body.AuthorId = AuthorId;
        }
      }

      if (CategoryId) {
        const dataCategory = await Category.findOne({
          where: {
            id: CategoryId,
          },
        });

        if (!dataCategory) {
          throw { name: "Id Category Tidak Ditemukan" };
        } else {
          body.CategoryId = CategoryId;
        }
      }

      const dataBuku = await Book.create(body);

      res.status(201).json({
        statusCode: 201,
        message: "Berhasil Membuat Data Buku Baru",
        data: dataBuku,
      });
    } catch (error) {
      next(error);
    }
  }

  // UPDATE
  static async update(req, res, next) {
    try {
      const { id } = req.params;
      const {
        title,
        publicationYear,
        genre,
        countPage,
        rating,
        AuthorId,
        CategoryId,
      } = req.body;

      const dataBuku = await Book.findOne({
        where: {
          id,
        },
      });

      if (!dataBuku) {
        throw { name: "Id Buku Tidak Ditemukan" };
      }

      const body = {
        title,
        publicationYear,
        genre,
        countPage: +countPage,
        rating,
      };

      if (req.file) {
        remove(dataBuku.image);
        body.image = req.file.path ? req.file.path : "";
      }

      if (AuthorId) {
        const dataAuthor = await Author.findOne({
          where: {
            id: AuthorId,
          },
        });

        if (!dataAuthor) {
          throw { name: "Id Author Tidak Ditemukan" };
        } else {
          body.AuthorId = AuthorId;
        }
      }

      if (CategoryId) {
        const dataCategory = await Category.findOne({
          where: {
            id: CategoryId,
          },
        });

        if (!dataCategory) {
          throw { name: "Id Category Tidak Ditemukan" };
        } else {
          body.CategoryId = CategoryId;
        }
      }

      await Book.update(body, { where: { id } });

      res.status(200).json({
        statusCode: 200,
        message: "Berhasil Memperbaharui Data Buku",
      });
    } catch (error) {
      next(error);
    }
  }

  // DELETE
  static async delete(req, res, next) {
    try {
      const { id } = req.params;

      const dataBuku = await Book.findOne({
        where: {
          id,
        },
      });

      if (!dataBuku) {
        throw { name: "Id Buku Tidak Ditemukan" };
      }

      await Book.destroy({ where: { id } });

      res.status(200).json({
        statusCode: 200,
        message: "Berhasil Menghapus Data Buku",
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;
