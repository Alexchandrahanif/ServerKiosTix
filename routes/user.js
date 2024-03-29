const Controller = require("../controller/user");
const authentication = require("../middleware/authentication");

const userRouter = require("express").Router();

userRouter.post("/register", Controller.register);
userRouter.post("/login", Controller.login);
userRouter.get("/profile", authentication, Controller.getProfile);
userRouter.get("/", authentication, Controller.getAll);
userRouter.get("/:id", authentication, Controller.getOne);
userRouter.patch("/password/:id", authentication, Controller.updatePassword);
userRouter.patch("/:id", authentication, Controller.update);
userRouter.delete("/:id", authentication, Controller.delete);

module.exports = userRouter;
