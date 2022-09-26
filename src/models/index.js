const userDao = require("./userDao");
const storeDao = require("./storeDao");
const database = require("./dataSource");
const  mainDao  = require("./mainDao");

module.exports = {
  mainDao,
  userDao,
  storeDao,
  database,
};
