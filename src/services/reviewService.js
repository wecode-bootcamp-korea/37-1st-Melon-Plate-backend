const { reviewDao } = require("../models");

const postNewReview = async (
  // id,
  storeId,
  rate,
  text,
  imgArr
) => {
  const newReviewInsertId = await reviewDao.createReview(
    // id,
    storeId,
    rate,
    text
  );

  // let rowImg = "";
  // console.log(imgArr);
  // imgArr.map((img) => rowImg = "(" + newReviewInsertId + "," + '"' + img + '"' + ")" + ",");
  // console.log(rowImg);
  // let rowImage = rowImg.slice(0,-1);

  let rowImage = [];
  // imgArr.map((img) => rowImage.push([newReviewInsertId,imgArr[img]]))
  for ( img in imgArr ) {
    rowImage.push([newReviewInsertId,imgArr[img]])
  }
  console.log(rowImage);

  const createReview = await reviewDao.createReviewImage(
    rowImage
    );
  return createReview;
};

module.exports = {
  postNewReview,
};
