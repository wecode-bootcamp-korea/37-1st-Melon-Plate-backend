const router = require("express").Router();

const { userController } = require("../controllers");
const { uploadFiles } = require("../middlewares");
const { upload } = require("../middlewares/multer")

router
  .route("/signup")
  .post(upload.single("profileImg"), userController.getUserSignUp);

router
.route("/signin")
// .post(upload.single("profileImg"),userController.signIn)
.post(userController.signIn)

module.exports = router