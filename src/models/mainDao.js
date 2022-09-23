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
  )

  return result
}

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
  )

  return result
}

const getSearchResult = async (query) => {
  const result = await database.query(
    `
   SELECT 
    stores.id,
    stores.address,
    stores.name,
    stores.image,
    stores.view_count,
    categories.category
   FROM stores, categories 
   WHERE categories.id = stores.category_id
   AND stores.name LIKE ("%"?"%") 
   OR stores.address LIKE ("%"?"%") 
   OR categories.category LIKE ("%"?"%")
   `,
    [query, query, query]
  );

  return result;
};

module.exports = {
  getRateAverage,
  getTheNumberOfReviews,
  getSearchResult,
};