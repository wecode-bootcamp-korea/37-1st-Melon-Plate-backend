const express = require("express");
const router = express.Router();

const mainRouter = require("./mainRouter");
const userRouter = require("./userRouter");
const reviewRouter = require("./reviewRouter");

router.use("", mainRouter);
router.use("/user", userRouter);
router.use("/review", reviewRouter);

module.exports = router;
