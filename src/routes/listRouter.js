const router = require("express").Router();

const { listController } = require("../controllers");

router
  .route("/seperate")
  .get(listController.getSeperatedList);

module.exports = router;
