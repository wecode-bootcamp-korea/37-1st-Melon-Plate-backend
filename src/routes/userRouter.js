const router = require("express").Router();

const { userController } = require("../controllers");
const { uploadFiles } = require("../middlewares");
const { upload } = require("../middlewares")

router
  .route("/signup")
  .post(upload.single("profileImg"), userController.getUserSignUp);

router
.route("/signin")
.post(userController.signIn)

module.exports = router
