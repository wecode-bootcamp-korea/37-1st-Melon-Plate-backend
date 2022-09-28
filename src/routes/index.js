const express = require("express");
const router = express.Router();

const mainRouter = require("./mainRouter");
const userRouter = require("./userRouter");
const storeRouter = require("./storeRouter");
const listRouter = require("./listRouter");

router.use("", mainRouter);
router.use("/user", userRouter);
router.use("/store", storeRouter);
router.use("/list", listRouter);

module.exports = router;
