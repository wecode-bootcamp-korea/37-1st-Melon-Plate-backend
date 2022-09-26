const { mainDao } = require("../models");

const getSearchResult = async (query, filter, price, location, category) => {
  const searchResult = await mainDao.getSearchResult(
    query,
    filter,
    price,
    location,
    category
  );

  return searchResult;
};

module.exports = {
  getSearchResult,
};
