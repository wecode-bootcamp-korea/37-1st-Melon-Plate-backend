const { storeDao } = require("../models");
const { userDao } = require("../models");

const createStore = async (
  user_id,
  name,
  description,
  address,
  tel,
  open_time,
  closed_time,
  closed_day_id
) => {
  if (!(await userDao.signIn(user_id).admin)) {
    const err = new Error(`not admin user`);
    err.statusCode = 400;
    throw err;
  }
  const createStore = await storeDao.createStore(
    name,
    description,
    address,
    tel,
    open_time,
    closed_time,
    closed_day_id
  );
  return await createStore;
};

module.exports = { createStore };
