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
  category_id,
  food_menu
) => {
  const adminTF = await userDao.getUserById(user_id).admin;
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
  let menu = [];
  for (i in food_menu) {
    menu.push([food_menu[i].name, store_id, food_menu[i].price]);
  }



  let day = async (store_id) => {
    if (closed_day_id != "NULL") {
      for (i in offDay) {
        if (offDay[i] == "1") {
          await storeDao.makeOffday(7 - i, store_id);
        }
      }
    }
  };

  let menuPush = async (menu) => {
 
    if (food_menu != "NULL") {
      await storeDao.createMenu(menu);
    }
  };
  await menuPush(menu);
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
  store_id,
  food_menu
) => {
  let [check] = await storeDao.checkStore(store_id);
  let checkout = check.admin_user_id;
  let menu = [];

  for (i in food_menu) {
    menu.push([food_menu[i].name, store_id, food_menu[i].price]);
  }
  
  console.log("서비스1================================",menu,food_menu)
  if (checkout !== id) {
    const err = new Error(`ACCESS ONLY STORES ADMIN USER`);
    err.statusCode = 400;
    throw err;
  } else {
    await storeDao.initOffday(store_id);
    console.log("서비스2================================")
    await storeDao.initMenus(store_id);
    console.log("서비스3================================")
    closed_day_id *= 1;
    const offDay = closed_day_id.toString(2).padStart(7, 0);

    let day = async (store_id) => {
      if (closed_day_id != "NULL") {
        for (i in offDay) {
          if (offDay[i] == "1") {
            console.log("서비스4================================")
            await storeDao.makeOffday(7 - i, store_id);
          }
        }
      }
    };

    let menuPush = async (menu) => {
      if (food_menu != "NULL") {
        console.log("서비스5================================")
        await storeDao.createMenu(menu);
      }
    };
    console.log("서비스6================================")
    if (food_menu){
    await menuPush(menu)}
    await day(store_id);
    console.log("서비스7================================",store_id,menu)
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

const getInfoBeforeUpdate = async (id, store_id) => {
  let [check] = await storeDao.checkStore(store_id);
  let checkout = check.admin_user_id;
  console.log("=========", checkout, id);
  if (checkout !== id) {
    const err = new Error(`ACCESS ONLY STORES ADMIN USER`);
    err.statusCode = 400;
    throw err;
  }

  let [A] = await storeDao.getInfoBeforeUpdate(store_id);
  let B = await storeDao.getMenusBeforeUpdate(store_id);
  if (B== "NULL") {A.food_menu = [];}
  
  A.food_menu = B
console.log(await A)
  return A
};

module.exports = { createStore, updateStore, getInfoBeforeUpdate };
