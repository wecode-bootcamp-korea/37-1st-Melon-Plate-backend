const router = require("express").Router();

const { userController } = require("../controllers");
const { upload } = require("../middlewares");

router
  .route("/signup")
  .post(upload.single("profileImg"), userController.getUserSignUp);

module.exports = router;
