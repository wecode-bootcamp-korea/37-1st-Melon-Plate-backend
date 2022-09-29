const database = require("./dataSource");

const createStore = async (
  name,
  description,
  address,
  tel,
  open_time,
  closed_time,
  id,
  image,
  category_id
) => {
  try {
    return await database.query(
      `INSERT INTO stores(
            name, 
            description,
            address,
            tel,
            open_time,
            closed_time,
            admin_user_id,
            image,
            category_id
          ) VALUES (?, ? ,?, ?, ?, ?, ?, ?, ?);
          `,
      [
        name,
        description,
        address,
        tel,
        open_time,
        closed_time,
        id,
        image,
        category_id,
      ]
    );
  } catch (err) {
    const error = new Error("INVALID_DATA_INPUT");
    error.statusCode = 500;
    throw error;
  }
};

const makeOffday = async (day_id, store_id) => {
  await database.query(
    `INSERT INTO off_days(
    day_id,
    store_id
  )VALUES (?,?)
  `,
    [day_id, store_id]
  );
};

const initOffday = async (store_id) => {
  await database.query(
    `DELETE FROM off_days
      WHERE store_id=?
    `,
    [store_id]
  );
};

const updateStore = async (
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
) => {
  await database.query(
    `UPDATE stores
      SET name=?, 
      description=?, 
      address=?, 
      tel=?, 
      open_time=?, 
      closed_time=?, 
      image=?, 
      category_id=?,
      admin_user_id=?
      WHERE id = ?
      `,
    [
      name,
      description,
      address,
      tel,
      open_time,
      closed_time,
      image,
      category_id,
      id,
      store_id,
    ]
  );
};

const checkStore = async (store_id) => {
  let checkStore = await database.query(
    `select 
    *
     from stores where stores.id=?`,
    [store_id]
  );
  return checkStore;
};

const getInfoBeforeUpdate = async (store_id) => {
  return await database.query(
    `SELECT 
      name, 
      description,
      address,
      tel,
      open_time,
      closed_time,
      admin_user_id,
      image,
      category_id
      FROM stores WHERE id = ?
`,[store_id]
  );
};


const getMenusBeforeUpdate = async (store_id) => {
  return await database.query(
    `SELECT 
      menus.name,
      menus.id AS id,
      menus.price
      FROM menus WHERE store_id = ?
`,[store_id]
  );
};


const createMenu = async (menuInput) => {
  await database.query(
    `INSERT INTO menus(
    name,
    store_id,
    price
  )VALUES ?
  `,
    [menuInput]
  );
};

const initMenus= async(store_id) => {
  await database.query(
    `DELETE FROM menus
      WHERE store_id=?
    `,
    [store_id]
  );
}


module.exports = {
  createStore,
  makeOffday,
  initOffday,
  updateStore,
  checkStore,
  getInfoBeforeUpdate,
  getMenusBeforeUpdate,
  createMenu,
  initMenus
};
