const express = require("express");
const router = express.Router();

const mainRouter = require("./mainRouter");
const userRouter = require("./userRouter");

router.use("", mainRouter);
router.use("/user", userRouter);

module.exports = router;
