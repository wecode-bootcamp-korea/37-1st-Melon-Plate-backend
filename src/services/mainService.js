const { mainDao } = require("../models");

const getSearchResult = async (query, filter, price, location, category, menu, limit, offDay) => {
  const searchResult = await mainDao.getSearchResult(
    query,
    filter,
    price,
    location,
    category, 
    menu, 
    limit,
    offDay
  );

  return searchResult;
};

module.exports = {
  getSearchResult,
};
