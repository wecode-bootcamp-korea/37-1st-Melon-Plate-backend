const router = require("express").Router();

const { userController } = require("../controllers");
const { uploadFiles } = require("../middlewares");
const { upload } = require("../middlewares/multer")
const { accessToken } = require("../middlewares/auth");


router
  .route("/signup")
  .post(upload.single("profileImg"), userController.getUserSignUp);

router
.route("/signin")
// .post(upload.single("profileImg"),userController.signIn)
.post(userController.signIn)

router
.route("/admin")
.get(accessToken, userController.getAdmin)

module.exports = router