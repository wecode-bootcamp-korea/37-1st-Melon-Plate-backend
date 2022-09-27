const userDao = require("./userDao");
const storeDao = require("./storeDao");
const likeDao = require("./likeDao");
const database = require("./dataSource");
const mainDao  = require("./mainDao");

module.exports = {
  mainDao,
  userDao,
  storeDao,
  likeDao,
  database,
};
