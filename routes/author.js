const Controller = require("../controller/author");
const authentication = require("../middleware/authentication");

const authorRouter = require("express").Router();

authorRouter.get("/", Controller.getAll);
authorRouter.get("/:id", Controller.getOne);
authorRouter.post("/", authentication, Controller.create);
authorRouter.patch("/:id", authentication, Controller.update);
authorRouter.delete("/:id", authentication, Controller.delete);

module.exports = authorRouter;
