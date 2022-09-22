const express = require("express");
const router = express.Router();
const userRouter = require("./userRouter");
const storeRouter = require("./storeRouter");

router.use("/user", userRouter);
router.use("/store", storeRouter);

module.exports = router;
