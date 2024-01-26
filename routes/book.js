const Controller = require("../controller/Book");
const upload = require("../helper/multer");
const authentication = require("../middleware/authentication");

const bookRouter = require("express").Router();

const file = upload();

bookRouter.get("/author/:AuthorId", authentication, Controller.getAllByAuhorId);
bookRouter.get(
  "/category/:CategoryId",
  authentication,
  Controller.getAllByCategoryId
);
bookRouter.get("/", authentication, Controller.getAll);
bookRouter.get("/:id", authentication, Controller.getOne);
bookRouter.post("/", file.single("image"), authentication, Controller.create);
bookRouter.patch(
  "/:id",
  file.single("image"),
  authentication,
  Controller.update
);
bookRouter.delete("/:id", authentication, Controller.delete);

module.exports = bookRouter;
