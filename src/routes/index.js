const express = require("express");
const router = express.Router();
const userRouter = require("./userRouter");
const storeRouter = require("./storeRouter");
const detailRouter = require("./detailRouter");

router.use("/user", userRouter);
router.use("/store", storeRouter);
router.use("/detail", detailRouter);

module.exports = router;
