const router = require("express").Router();

const { storeController } = require("../controllers");
const { uploadFiles } = require("../middlewares");
const { upload } = require("../middlewares");
const { loginRequired } = require("../middlewares");

router
  .route("/")
  .post(upload.single("image"), loginRequired, storeController.createStore);

router
  .route("/:storeId")
  .patch(upload.single("image"), loginRequired, storeController.updateStore);

router
  .route("/:storeId")
  .get(loginRequired, storeController.getMyStore)
module.exports = router;
