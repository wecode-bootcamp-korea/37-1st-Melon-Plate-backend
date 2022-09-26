const router = require("express").Router();

const { storeController } = require("../controllers");
const { uploadFiles } = require("../middlewares");
const { upload } = require("../middlewares");
const { accessToken } = require("../middlewares");

router
  .route("/create")
  .post(upload.single("image"), accessToken, storeController.createStore);

router
  .route("/update")
  .patch(upload.single("image"), accessToken, storeController.updateStore);

module.exports = router;
