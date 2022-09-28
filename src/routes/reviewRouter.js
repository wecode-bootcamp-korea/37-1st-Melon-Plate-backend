const router = require("express").Router();

const { reviewController } = require("../controllers");
const { upload } = require("../middlewares");
const { loginRequired } = require("../middlewares");

router
  .route("/new/image")
  .get(upload.array("reviewImg", 10), reviewController.getReviewImageLink);

router
  .route("/new/:storeId")
  .post(loginRequired, reviewController.postNewReview);

module.exports = router;
