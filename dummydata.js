const fs = require("fs");
// const util = require("util");
// const { database } = require("./src/models/dataSource");
const { database } = require("./src/models");
​
const users = fs.readFileSync("users.csv", "utf-8");
const stores = fs.readFileSync("stores.csv", "utf-8");
​
function csvToNode(csv) {
  const rows = csv.split("\n");
  const header = rows[0].split(",");
  const storeArray = [];
  for (let i = 1; i < rows.length; i++) {
    let obj = {};
    let row = rows[i].split(",");
    for (let j = 0; j < header.length - 1; j++) {
      obj[header[j]] = row[j];
    }
    storeArray.push(obj);
  }
  return storeArray;
}
​
const store = csvToNode(stores);
const user = csvToNode(users);
​
console.log(store);
​
for (let i = 0; i < store.length; i++) {
  let {
    name,
    image,
    description,
    address,
    tel,
    open_time,
    closed_time,
    closed_day_id,
    price_range,
  } = store[i];
​
  console.log(
    name,
    image,
    description,
    address,
    tel,
    open_time,
    closed_time,
    closed_day_id,
    price_range
  );
​
  let pushStore = async(
    name,
    image,
    description,
    address,
    tel,
    open_time,
    closed_time,
    closed_day_id,
    price_range
  ) => {
    await database.query(
      `INSERT INTO stores(
            name,
            image,
            description,
            address,
            tel,
            open_time,
            closed_time,
            closed_day_id,
            price_range
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        `,
      [
        name,
        image,
        description,
        address,
        tel,
        open_time,
        closed_time,
        closed_day_id,
        price_range,
      ]
    );
    console.log(pushStore);
  };
​
  // console.log(name, image, description, address, tel, open_time, closed_time, closed_day_id, price_range)
}
// for (let i = 0; i < user.length; i++) {
//   let { user_id, nickname, password, profile_image, gender, age } = user[i];
​
//   console.log(user_id, nickname, password, profile_image, gender, age)
// }
// console.log(name);
// console.log(store);
// console.log(user);