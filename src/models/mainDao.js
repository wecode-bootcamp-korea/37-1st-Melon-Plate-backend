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
   FROM stores
   INNER JOIN categories
    ON categories.id = stores.category_id
   INNER JOIN reviews
    ON stores.id = reviews.store_id
   INNER JOIN menus
    ON menus.store_id = stores.id
   WHERE stores.address LIKE ("%"?"%")
    OR stores.name LIKE ("%"?"%") 
    OR categories.category LIKE ("%"?"%")
    OR menus.store_id = stores.id AND menus.name LIKE ("%"?"%")
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