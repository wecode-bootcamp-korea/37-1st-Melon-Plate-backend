const express = require("express");
const router = express.Router();
const { upload } = require("../../util/multer")
const { userController } = require("../controllers");

router.post("/signup", upload.single('image'), userController.signUp);

module.exports = router;
