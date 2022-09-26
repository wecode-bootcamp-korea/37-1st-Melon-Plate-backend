const express = require("express");
const router = express.Router();

const mainRouter = require("./mainRouter");
const userRouter = require("./userRouter");
const listRouter = require("./listRouter");

router.use("", mainRouter);
router.use("/user", userRouter);
router.use("/list", listRouter);

module.exports = router;
