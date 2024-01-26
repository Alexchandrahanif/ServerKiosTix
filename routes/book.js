const Controller = require("../controller/Book");
const authentication = require("../middleware/authentication");

const bookRouter = require("express").Router();

bookRouter.get("/", authentication, Controller.getAll);
bookRouter.get("/:id", authentication, Controller.getOne);
bookRouter.post("/", authentication, Controller.create);
bookRouter.patch("/:id", authentication, Controller.update);
bookRouter.delete("/:id", authentication, Controller.delete);

module.exports = bookRouter;
