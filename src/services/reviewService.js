const { reviewDao } = require("../models");

const postNewReview = async (id, storeId, rate, text, imgArr) => {
  const newReviewInsertId = await reviewDao.createReview(
    id,
    storeId,
    rate,
    text
  );

  let rowImage = [];
  imgArr.map((img) => rowImage.push([newReviewInsertId, img]));

  const createReview = await reviewDao.createReviewImage(rowImage);

  return createReview;
};

module.exports = {
  postNewReview,
};
