const { detailDao, database } = require("../models");

const getStore = async (id,store_id)=> {
    
    let increseCount = await detailDao.increseCount(store_id);
    let [A] = await detailDao.getStore(id,store_id);
    let B = await detailDao.getStoreMenus(store_id);
    let C = await detailDao.getStoreReviews(store_id);
    // let D = await detailDao.getReviewImages(store_id);
    
    A.menu = B 
   //////////////////////////// 
    
  //   let reviewImage=[];
  //  for (i in D) {
  //   reviewImage.push(D[i].image);
  // }
  // for (i in C) {
  //   id = C[i].id;
  //   if (C[id] !== undefined) {
  //     C[i].image = reviewImage;
  //   } 
  // }
  //  ///////////////////////////

   let result = A
  

    
     
return result;
}

module.exports = {
 getStore,
  };