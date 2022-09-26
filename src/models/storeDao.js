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
    console.log(err);
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
  console.log(name, store_id);
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
    `select * from stores where stores.id=?`,
    [store_id]
  );
  return checkStore;
};

module.exports = {
  createStore,
  makeOffday,
  initOffday,
  updateStore,
  checkStore,
};