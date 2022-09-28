const router = require("express").Router();

const { userController } = require("../controllers");
const { uploadFiles } = require("../middlewares");
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

router
  .route("/profile")
  .get(loginRequired, userController.getProfile)

router
  .route("/profile")
  .patch(upload.single("profileImg"), loginRequired, userController.updateProfile)

module.exports = router;
