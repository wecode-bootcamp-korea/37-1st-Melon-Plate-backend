const { storeDao } = require("../models");
const { userDao } = require("../models");

const createStore = async (
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
  category_id
) => {
  const adminTF = await userDao.signIn(user_id).admin;
  async (adminTF) => {
    if (!adminTF) {
      const err = new Error(`NOT_ADMIN_USER`);
      err.statusCode = 400;
      throw err;
    }
  };
  const createStore = await storeDao.createStore(
    name,
    description,
    address,
    tel,
    open_time,
    closed_time,
    id,
    image,
    category_id
  );

  let store_id = createStore.insertId;
  closed_day_id *= 1;
  const offDay = closed_day_id.toString(2).padStart(7, 0);

  let day = async (store_id) => {
    if (closed_day_id != "NULL") {
      for (i in offDay) {
        if (offDay[i] == "1") {
          await storeDao.makeOffday(7 - i, store_id);
        }
      }
    }
  };
  await day(store_id);

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

    await storeDao.initOffday(store_id);

    closed_day_id *= 1;
    const offDay = closed_day_id.toString(2).padStart(7, 0);

  let day = async (store_id) => {
    if (closed_day_id != "NULL") {
      for (i in offDay) {
        if (offDay[i] == "1") {
          await storeDao.makeOffday(7 - i, store_id);
        }
      }
    }
  };
  await day(store_id);


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
