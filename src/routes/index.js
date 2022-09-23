const express = require("express");
const router = express.Router();

const mainRouter = require("./mainRouter");
const listRouter = require("./listRouter");
const userRouter = require("./userRouter");

router.use("", mainRouter);
router.use("/list", listRouter);
router.use("/user", userRouter);

module.exports = router;
