const database  = require("./dataSource");

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
      [name, description, address, tel, open_time, closed_time, id,image,category_id]
    );
    
  } catch (err) {
    console.log(err);
    const error = new Error("INVALID_DATA_INPUT");
    error.statusCode = 500;
    throw error;
  }
};

///////////////////////////////////
// const makeOffday = async (closed_day_id, store_id) = {

// }

///////////////////////////////////

module.exports = {
    createStore,
  };
  