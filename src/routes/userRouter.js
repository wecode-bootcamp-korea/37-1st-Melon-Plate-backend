const router = require("express").Router();

const { userController } = require("../controllers");
const { upload } = require("../middlewares");
const { loginRequired } = require("../middlewares");

router
  .route("/signup")
  .post(upload.single("profileImg"), userController.getUserSignUp);

router
  .route("/signin")
  .post(userController.signIn);

router
  .route("/admin")
  .get(loginRequired, userController.getAdmin);

module.exports = router;
