const express = require("express");
const router = express.Router();
const userRouter = require("./userRouter");
const storeRouter = require("./storeRouter");
const detailRouter = require("./detailRouter");
const likeRouter = require("./likeRouter");

router.use("/user", userRouter);
router.use("/store", storeRouter);
router.use("/detail", detailRouter);
router.use("/like", likeRouter);

module.exports = router;
