const router = require("express").Router();

const { likeController } = require("../controllers");
const { accessToken } = require("../middlewares");

router
  .route("/:storeId")
  .post(accessToken, likeController.likeStore);



module.exports = router;
