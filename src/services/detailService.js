const { detailDao } = require("../models");

const getStore = async (id, store_id) => {
  let increseCount = await detailDao.increseCount(store_id);
  let [A] = await detailDao.getStore(id, store_id);
  let B = await detailDao.getStoreMenus(store_id);
  let C = await detailDao.getReviewImages(store_id)
  
    A.menu = B;
    
    let reviewImage = [];
    for (i in C){
      reviewImage.push(C[i].reviewImg)
    }
    A.reviewImg = reviewImage
  let result = A;

  return result;
};

const getReviews = async (id, store_id) => {
  let C = await detailDao.getStoreReviews(store_id);
  let D = await detailDao.getReviewImages(store_id);
  let reviewImage = [];

  for (i in D) {
    reviewImage.push({ id: D[i].review_id, reviewImg: D[i].reviewImg });
  }
  for (i in C) {
    C[i].reviewImg =[];
  }

for ( i in C){
  for (j in reviewImage){
    if (C[i].id == reviewImage[j].id) {
      C[i].reviewImg.push(reviewImage[j].reviewImg)
    }
  }
}
  C.unshift({reviewCount : C.length})
  return C;
};

module.exports = {
  getStore,
  getReviews,
};
