const { reviewDao } = require("../models");

const postNewReview = async (
  // id,
  storeId,
  rate,
  text,
  imgJSON
) => {
  return await reviewDao.createReview(
    // id,
    storeId,
    rate,
    text,
    imgJSON
  );
};

module.exports = {
  postNewReview,
};
