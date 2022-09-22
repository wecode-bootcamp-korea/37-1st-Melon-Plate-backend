const { database } = require("./dataSource");

const createStore = async (
  name,
  description,
  address,
  tel,
  open_time,
  closed_time,
  closed_day_id,
  id,
  image
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
            closed_day_id,
            admin_user_id,
            image
          ) VALUES (?, ? ,?, ?, ?, ?, ?, ?, ?);
          `,
      [name, description, address, tel, open_time, closed_time, closed_day_id,id,image]
    );
  } catch (err) {
    console.log(err);
    const error = new Error("INVALID_DATA_INPUT");
    error.statusCode = 500;
    throw error;
  }
};

module.exports = {
    createStore,
  };
  