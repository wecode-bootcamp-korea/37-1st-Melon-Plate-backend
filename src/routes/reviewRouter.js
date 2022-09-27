const router = require("express").Router();
const { reviewController } = require("../controllers");

const { upload } = require("../middlewares");

router
  .route("/image")
  .get(upload.single("image"), reviewController.returnImageUrl);

module.exports = router;