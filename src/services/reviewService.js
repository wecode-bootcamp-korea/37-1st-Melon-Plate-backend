const { reviewDao } = require("../models");

const postNewReview = async (
  id,
  storeId,
  text,
  rate,
  imgJSON
) => {
  return await reviewDao.createReview(
    id,
    storeId,
    text,
    rate,
    imgJSON
  );
};

module.exports = {
  postNewReview,
};
