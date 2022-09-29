const { storeDao } = require("../models");
const { userDao } = require("../models");

const createStore = async (
  id,
  userId,
  name,
  description,
  address,
  tel,
  openTime,
  closedTime,
  offDayIds, // [1, 3]
  image,
  category_id
) => {
  const storeId = await storeDao.createStore(
    name,
    description,
    address,
    tel,
    open_time,
    closed_time,
    id,
    image,
    category_id,
    offDayIds
  );

  return storeId
};

const updateStore = async (
  id,
  user_id,
  name,
  description,
  address,
  tel,
  open_time,
  closed_time,
  closed_day_id,
  image,
  category_id,
  store_id
) => {
  let [check] = await storeDao.checkStore(store_id);
  let checkout = check.admin_user_id;


  if (checkout !== id) {

    err.statusCode = 400;
    throw err;
  } else {
  
  // update에 필요한 closedDayIds를 받아서 직접 bulk insert 하도록 구현해주세요.
  /* PUT (월, 화, 수) -> 변경 (목, 금)
  {
    offday1 : true,
    offday2 : false,
    offday3 : true,
    offday4 : false,
    offday5 : true
  }
  */

  /* PATCH 기존에(월, 화, 수) -> 변경 (목, 금) :
  {
    offday1 : true,
    offday5 : true
  }
  */

//    await storeDao.initOffday(store_id);
//
//    closed_day_id *= 1;
//    const offDay = closed_day_id.toString(2).padStart(7, 0);
//
//  let day = async (store_id) => {
//    if (closed_day_id != "NULL") {
//      for (i in offDay) {
//        if (offDay[i] == "1") {
//          await storeDao.makeOffday(7 - i, store_id);
//        }
//      }
//    }
//  };
//  await day(store_id);


    let modifyStore = await storeDao.updateStore(
      name,
      description,
      address,
      tel,
      open_time,
      closed_time,
      image,
      category_id,
      id,
      store_id
    );
    return modifyStore;
  }
};

module.exports = { createStore, updateStore };
