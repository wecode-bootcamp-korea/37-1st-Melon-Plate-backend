const router = require("express").Router();

const { detailController } = require("../controllers");
const { uploadFiles } = require("../middlewares");
const { upload } = require("../middlewares");
const { loginRequired } = require("../middlewares");

router
  .route("/:storeId")
  .get(loginRequired, detailController.getStore);

router
 .route("/:storeId/reviews")  
 .get(detailController.getReviews);
  
 ////임시로 토큰지워둠////
module.exports = router;
