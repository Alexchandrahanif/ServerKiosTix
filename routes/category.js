const Controller = require("../controller/category");
const authentication = require("../middleware/authentication");

const categoryRouter = require("express").Router();

categoryRouter.get("/", authentication, Controller.getAll);
categoryRouter.get("/:id", authentication, Controller.getOne);
categoryRouter.post("/", authentication, Controller.create);
categoryRouter.patch("/:id", authentication, Controller.update);
categoryRouter.delete("/:id", authentication, Controller.delete);

module.exports = categoryRouter;
