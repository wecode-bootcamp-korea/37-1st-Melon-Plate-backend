const database  = require("./dataSource");

const createStore = async (
  name,
  description,
  address,
  tel,
  open_time,
  closed_time,
  closed_day_id
) => {

  try {
    return await database.query(
      `INSERT INTO stroes(
            name, 
            description,
            address,
            tel,
            open_time,
            closed_time,
            closed_day_id
          ) VALUES (?, ? ,?, ?, ?, ?, ?);
          `,
      [name, description, address, tel, open_time, closed_time, closed_day_id]
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
  