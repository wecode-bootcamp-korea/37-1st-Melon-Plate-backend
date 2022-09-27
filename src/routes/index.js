const express = require("express");
const router = express.Router();

const mainRouter = require("./mainRouter");
const userRouter = require("./userRouter");
const storeRouter = require("./storeRouter");
const likeRouter = require("./likeRouter");

router.use("/main", mainRouter);
router.use("/user", userRouter);
router.use("/store", storeRouter);
router.use("/like", likeRouter);

module.exports = router;
