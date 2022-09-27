const { mainDao } = require("../models");

const getSearchResult = async (query) => {
  const searchResult = await mainDao.getSearchResult(query);
  const averageRate = await mainDao.getRateAverage();
  const countReviews = await mainDao.getTheNumberOfReviews();

  for (let i in searchResult) {
    for (let j in averageRate) {
      if (searchResult[i].id === averageRate[j].id) 
        searchResult[i].rate_average = averageRate[j].rate_average;
      if (searchResult[i].id === countReviews[j].id)
        searchResult[i].reviews_count = countReviews[j].reviews_count;
    }
  }

  return searchResult;
};

module.exports = {
  getSearchResult,
};
