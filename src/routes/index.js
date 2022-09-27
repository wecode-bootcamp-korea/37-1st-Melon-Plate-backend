const express = require("express");
const router = express.Router();

const mainRouter = require("./mainRouter");
const userRouter = require("./userRouter");
const storeRouter = require("./storeRouter");
const reviewRouter  = require("./reviewRouter");

router.use("", mainRouter);
router.use("/user", userRouter);
router.use("/store", storeRouter);
router.use("/review", reviewRouter);

module.exports = router;
