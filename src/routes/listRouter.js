const router = require("express").Router();

const { listController } = require("../controllers");

router
  .route("")
  .get(listController.getListResult);

module.exports = router;
