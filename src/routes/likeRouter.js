const router = require("express").Router();

const { likeController } = require("../controllers");
const { loginRequired } = require("../middlewares");

router
  .route("/:storeId")
  .post(loginRequired, likeController.likeStore);



module.exports = router;
