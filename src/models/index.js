const userDao = require("./userDao");
const storeDao = require("./storeDao");
const detailDao = require("./detailDao")
const database = require("./dataSource");
const  mainDao  = require("./mainDao");

module.exports = {
  mainDao,
  userDao,
  storeDao,
  detailDao,
  database,
};
