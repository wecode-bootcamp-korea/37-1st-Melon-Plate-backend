const router = require("express").Router();

const { mainController } = require("../controllers");

router
  .route("/search")
  .get(mainController.getSearchResult);

module.exports = router;
