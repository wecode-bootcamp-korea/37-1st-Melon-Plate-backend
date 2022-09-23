const { mainDao } = require("../models");

const getSearchResult = async (query) => {
  const searchResult = await mainDao.getSearchResult(query);
  const avgCount = await mainDao.getAvgCount();

  for (let i in searchResult) {
    for (let j in avgCount) {
      if (searchResult[i].id === avgCount[j].id) {
        searchResult[i].rateAvg = avgCount[j].rateAvg;
        searchResult[i].reviewCount = avgCount[j].reviewCount;
      }
    }
  }

  return searchResult;
};

module.exports = {
  getSearchResult,
};
