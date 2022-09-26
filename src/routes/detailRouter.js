const router = require("express").Router();

const { detailController } = require("../controllers");
const { uploadFiles } = require("../middlewares");
const { upload } = require("../middlewares");
const { accessToken } = require("../middlewares");

router
  .route("/:storeId")
  .get(accessToken, detailController.getStore);
  
module.exports = router;
