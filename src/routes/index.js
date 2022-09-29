const express = require("express");
const router = express.Router();

const mainRouter = require("./mainRouter");
const userRouter = require("./userRouter");
const reviewRouter = require("./reviewRouter");
const storeRouter = require("./storeRouter");
const likeRouter = require("./likeRouter");
const listRouter = require("./listRouter");

router.use("/main", mainRouter);
router.use("/user", userRouter);
router.use("/review", reviewRouter);
router.use("/store", storeRouter);
router.use("/like", likeRouter);
router.use("/list", listRouter);

module.exports = router;
