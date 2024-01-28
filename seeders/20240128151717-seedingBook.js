"use strict";

const dataBook = require("../data/Book.json");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    dataBook.forEach((el) => {
      el.createdAt = el.updatedAt = new Date();
    });
    await queryInterface.bulkInsert("Books", dataBook, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Books", null);
  },
};
