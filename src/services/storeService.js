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
  id,
  image,
  category_id
  );
  console.log(createStore)
};
///////////////////////////////////////
// if (closed_day_id) {
// const closed_day = closed_day_id.toString(2)
// if (closed_day[0] == "1") {closed_day_String.unshift("일")}
// if (closed_day[1] == "1") {closed_day_String.unshift("토")}
// if (closed_day[2] == "1") {closed_day_String.unshift("금")}
// if (closed_day[3] == "1") {closed_day_String.unshift("목")}
// if (closed_day[4] == "1") {closed_day_String.unshift("수")}
// if (closed_day[5] == "1") {closed_day_String.unshift("화")}
// if (closed_day[6] == "1") {closed_day_String.unshift("월")}
// }



///////////////////////////////////////




module.exports = { createStore };
