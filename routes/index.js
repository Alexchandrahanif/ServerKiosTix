const authorRouter = require("./author");
const bookRouter = require("./book");
const categoryRouter = require("./category");
const userRouter = require("./user");

const router = require("express").Router();

router.use("/user", userRouter);
router.use("/category", categoryRouter);
router.use("/author", authorRouter);
router.use("/book", bookRouter);

module.exports = router;
