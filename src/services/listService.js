const { listDao } = require("../models");

const getSeperatedList = async(
    address, 
    category, 
    menu, 
    limit
) => {
  return await listDao.getSeperatedList(
    address, 
    category, 
    menu, 
    limit
  );
};

module.exports = {
  getSeperatedList,
};