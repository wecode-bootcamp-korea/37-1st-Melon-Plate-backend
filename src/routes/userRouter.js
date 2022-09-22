const router = require("express").Router();

const { userController } = require("../controllers");
const { uploadFiles } = require("../middlewares");

router
  .route("/signup")
  .post(uploadFiles.single("profileImg"), userController.getUserSignUp);

module.exports = router;
