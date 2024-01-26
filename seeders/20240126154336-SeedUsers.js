"use strict";

const dataUser = require("../data/User.json");
require("dotenv").config();
const { hashingPassword } = require("../helper/helper");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    dataUser.forEach((el) => {
      el.password = hashingPassword(process.env.PASSWORD);
      el.createdAt = el.updatedAt = new Date();
    });
    await queryInterface.bulkInsert("Users", dataUser, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null);
  },
};
