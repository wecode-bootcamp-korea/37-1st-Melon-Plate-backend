const router = require("express").Router();

const { storeController } = require("../controllers");
const { upload } = require("../middlewares");
const { loginRequired, hasAdminPermission } = require("../middlewares");

router.post("/", upload.single("image"), loginRequired, hasAdminPermission, storeController.createStore);
router.patch("/:storeId",upload.single("image"), loginRequired, hasAdminPermission, storeController.updateStore);

router
  .route("/seperate")
  .get(listController.getSeperatedList);

router
  .route("/search")
  .get(mainController.getSearchResult);

module.exports = router;
