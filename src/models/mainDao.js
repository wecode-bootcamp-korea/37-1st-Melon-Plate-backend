const database = require("./dataSource");

const getSearchResult = async (query, filter, price, location, category) => {
  const result = await database.query(
    `
   SELECT DISTINCT
      stores.id,
      stores.address,
      stores.name,
      stores.image,
      stores.view_count AS views_count,
      COUNT(reviews.store_id) AS reviews_count,
      FORMAT(AVG(reviews.rate),2) AS rate_average,
      categories.category
   FROM stores, categories, menus, reviews
   WHERE categories.id = stores.category_id AND stores.id = reviews.store_id AND stores.address LIKE ("%"?"%")
    OR categories.id = stores.category_id AND stores.id = reviews.store_id AND stores.name LIKE ("%"?"%") 
    OR categories.id = stores.category_id AND stores.id = reviews.store_id AND categories.category LIKE ("%"?"%")
    OR categories.id = stores.category_id AND stores.id = reviews.store_id AND menus.store_id = stores.id AND menus.name LIKE ("%"?"%")
   GROUP BY stores.id, categories.category
   ORDER BY rate_average desc
   `,
    [query, query, query, query]
  );

  return result;
};

module.exports = {
  getSearchResult,
};