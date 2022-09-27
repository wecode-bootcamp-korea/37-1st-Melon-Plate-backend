const database = require("./dataSource");

const getSearchResult = async (query, filter, price, location, category) => {
  const priceRange = (price) ? (`stores.price_range between ${price} and 5 AND`) : "";
  const orderBy = (filter) ? (`ORDER BY ${filter} desc`) : "";

  const result = await database.query(
    `
   SELECT DISTINCT
      stores.id,
      stores.address,
      stores.name,
      stores.image,
      stores.price_range,
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
   WHERE ${priceRange} stores.address LIKE ("%"?"%")
    OR stores.name LIKE ("%"?"%") 
    OR menus.store_id = stores.id AND menus.name LIKE ("%"?"%")
    OR categories.category LIKE ("%"?"%")
   AND stores.address LIKE ("%"?"%")
   AND categories.category LIKE ("%"?"%")
   GROUP BY stores.id
   ${orderBy}
   `,
   [query, query, query, query, location, category]
   );
   
   return result;
  };
  
module.exports = {
  getSearchResult,
};
