const express = require("express");
const router = express.Router();

const userRouter = require("./userRouter");
const listRouter = require("./listRouter");

router.use("/user", userRouter);
router.use("/list", listRouter);

module.exports = router;
