const express = require("express");
const router = express.Router();

const mainRouter = require("./mainRouter");
const userRouter = require("./userRouter");
const storeRouter = require("./storeRouter");

router.use("", mainRouter);
router.use("/user", userRouter);
router.use("/store", storeRouter);

module.exports = router;
