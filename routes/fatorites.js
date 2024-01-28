const Controller = require("../controller/favorite");
const authentication = require("../middleware/authentication");

const favoriteRouter = require("express").Router();

favoriteRouter.get("/", authentication, Controller.getAll);
favoriteRouter.post("/", authentication, Controller.create);
favoriteRouter.delete("/:id", authentication, Controller.delete);

module.exports = favoriteRouter;
