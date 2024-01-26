"use strict";

const dataAuthor = require("../data/Auhtor.json");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    dataAuthor.forEach((el) => {
      el.createdAt = el.updatedAt = new Date();
    });
    await queryInterface.bulkInsert("Authors", dataAuthor, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Authors", null);
  },
};
