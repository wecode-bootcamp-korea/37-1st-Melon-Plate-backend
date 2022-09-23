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
  ) => {  
  console.log("==========스토어서비스",user_id)
  
  const adminTF = await userDao.signIn(user_id).admin
    async (adminTF) => {if (!adminTF){
    const err = new Error(`사장이 되어 돌아와라`);
    err.statusCode = 400;
    throw err;
  }
  }
  const createStore = await storeDao.createStore(
    name,
  description,
  address,
  tel,
  open_time,
  closed_time,
  closed_day_id,
  id,
  image
  );
  return await createStore;
};




module.exports = { createStore };
