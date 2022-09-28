const database = require("./dataSource");

const getSeperatedList = async (address, category, menu, limit) => {
  const result = await database.query(
    `
   SELECT distinct
    stores.id,
    stores.address,
    stores.description,
    stores.name,
    stores.image,
    categories.category,
    FORMAT(AVG(reviews.rate),2) AS rate_average
   FROM stores
   INNER JOIN categories
    ON categories.id = stores.category_id 
    INNER JOIN reviews
    ON stores.id = reviews.store_id
    INNER JOIN menus
    ON menus.store_id = stores.id
   WHERE stores.address LIKE ("%"?"%")
   AND menus.name LIKE ("%"?"%")
   AND categories.category LIKE ("%"?"%")
   GROUP BY stores.id 
   ORDER BY rate_average desc
   LIMIT ?
   `,
    [address, menu, category, limit]
  );

  return result;
};

module.exports = {
  getSeperatedList,
};
