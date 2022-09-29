const { detailDao } = require("../models");

const getStore = async (id, store_id) => {
  let increseCount = await detailDao.increseCount(store_id);
  let [storeInfo] = await detailDao.getStore(id, store_id);
  let menuInfo = await detailDao.getStoreMenus(store_id);
  let reviewInfo = await detailDao.getReviewImages(store_id)
  
    storeInfo.menu = menuInfo;
    
    let reviewImage = [];
    for (i in reviewInfo){
      reviewImage.push(reviewInfo[i].reviewImg)
    }
    storeInfo.reviewImg = reviewImage
  let result = storeInfo;

  return result;
};

const getReviews = async (id, store_id) => {
  let reviewInfo = await detailDao.getStoreReviews(store_id);
  let imageInfo = await detailDao.getReviewImages(store_id);
  let reviewImage = [];
  if (!reviewInfo){ 
  for (i in imageInfo) {
    reviewImage.push({ id: imageInfo[i].review_id, reviewImg: imageInfo[i].reviewImg });
  }
  for (i in reviewInfo) {
    reviewInfo[i].reviewImg =[];
  }

for ( i in reviewInfo){
  for (j in reviewImage){
    if (reviewInfo[i].id == reviewImage[j].id) {
      reviewInfo[i].reviewImg.push(reviewImage[j].reviewImg)
    }
  }
}

  reviewInfo[0].reviewCount = reviewInfo.length
  return reviewInfo;
}
  return []
};

module.exports = {
  getStore,
  getReviews,
};
