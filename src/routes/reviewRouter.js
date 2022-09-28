const router = require("express").Router();

const { reviewController } = require("../controllers");
const { upload } = require("../middlewares");
const { loginRequired } = require("../middlewares");

router
  .route("/new/:storeId")
  .post(upload.array("reviewImg", 10), reviewController.postNewReview);

module.exports = router;
