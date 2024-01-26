const Controller = require("../controller/user");
const authentication = require("../middleware/authentication");

const userRouter = require("express").Router();

userRouter.post("/register", authentication, Controller.register);
userRouter.post("/login", authentication, Controller.login);
userRouter.get("/", authentication, Controller.getAll);
userRouter.get("/:id", authentication, Controller.getOne);
userRouter.patch("/:id", authentication, Controller.update);
userRouter.delete("/:id", authentication, Controller.delete);

module.exports = userRouter;
