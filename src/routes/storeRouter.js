const router = require("express").Router();

const { storeController } = require("../controllers");
const { uploadFiles } = require("../middlewares");
const { upload } = require("../util/multer");
const { accessToken } = require("../middlewares/auth");

router
  .route("/create")
  .post(upload.single("image"), accessToken, storeController.createStore);

module.exports = router