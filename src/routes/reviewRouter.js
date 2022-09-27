const router = require("express").Router();

const { reviewController } = require("../controllers");
const { uploadFiles } = require("../middlewares");
const { accessToken } = require("../middlewares");

router
  .route("/new/:storeId")
  .post(uploadFiles.array("reviewImg", 10), reviewController.postNewReview);

module.exports = router;
