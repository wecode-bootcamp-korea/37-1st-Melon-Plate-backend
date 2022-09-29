const express = require("express");
const router = express.Router();

const userRouter = require("./userRouter");
const storeRouter = require("./storeRouter");
const likeRouter = require("./likeRouter");

router.use("/user", userRouter);
router.use("/stores", storeRouter);
router.use("/like", likeRouter);


module.exports = router;
