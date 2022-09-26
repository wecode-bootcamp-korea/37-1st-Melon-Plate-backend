const userDao = require("./userDao");
const storeDao = require("./storeDao");
const detailDao = require("./detailDao")
const database = require("./dataSource");

module.exports = {
  userDao,
  storeDao,
  detailDao,
  database,
};
