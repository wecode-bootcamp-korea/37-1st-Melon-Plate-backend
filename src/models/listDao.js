const database = require("./dataSource");

const getSeperatedList = async (
  address, 
  category, 
  menu,
  limit
) => {
  const result = await database.query(
    `
   SELECT distinct
    stores.id,
    stores.address,
    stores.description,
    stores.name,
    stores.image,
    FORMAT(AVG(reviews.rate),2) AS rate_average
   FROM stores, categories, menus, reviews
   WHERE categories.id = stores.category_id AND reviews.store_id=stores.id AND menus.store_id = stores.id
   AND stores.address LIKE ("%"?"%")
   AND categories.category LIKE ("%"?"%")
   AND menus.name LIKE ("%"?"%")
   GROUP BY stores.id 
   ORDER BY rate_average desc
   LIMIT ?
	`,
    [ address, category, menu, limit ]
  );

  return result;
};

module.exports = {
  getSeperatedList,
};