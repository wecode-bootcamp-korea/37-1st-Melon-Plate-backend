const router = require("express").Router();

const { userController } = require("../controllers");
const { uploadFiles } = require("../middlewares");
const { upload } = require("../middlewares");
const { accessToken } = require("../middlewares");

module.exports = router;
