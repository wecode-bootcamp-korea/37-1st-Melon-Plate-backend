const database = require("./dataSource");

const getTheNumberOfReviews = async () => {
  const result = await database.query(
    `
    SELECT
      stores.id,
      COUNT(store_id) AS reviews_count
    FROM reviews
    JOIN stores ON reviews.store_id=stores.id
    GROUP BY stores.id 
    `
  );
  return result;
};

const getRateAverage = async () => {
  const result = await database.query(
    `
    SELECT
      stores.id,
      FORMAT(AVG(rate),2) AS rate_average
    FROM reviews
    JOIN stores ON reviews.store_id=stores.id
    GROUP BY stores.id 
    `
  );
  return result;
};

const getSearchResult = async (query) => {
  const result = await database.query(
    `
   SELECT DISTINCT
    stores.id,
    stores.address,
    stores.name,
    stores.image,
    categories.category
   FROM stores, categories, menus
   WHERE categories.id = stores.category_id AND stores.address LIKE ("%"?"%")
   OR categories.id = stores.category_id AND stores.name LIKE ("%"?"%") 
   OR categories.id = stores.category_id AND categories.category LIKE ("%"?"%")
   OR categories.id = stores.category_id AND menus.store_id = stores.id AND menus.name LIKE ("%"?"%")
   `,
    [query, query, query, query]
  );

  return result;
};

module.exports = {
  getRateAverage,
  getTheNumberOfReviews,
  getSearchResult,
};
