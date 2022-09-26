const router = require("express").Router();

const { reviewController } = require("../controllers");
const { uploadFiles } = require("../middlewares");

router
  .route("/new")
  .post(uploadFiles.single("profileImg"), reviewController.postNewReivew);

module.exports = router;
