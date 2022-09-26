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
    stores.name,
    stores.image
    FROM stores, categories, menus, reviews
    WHERE categories.id = stores.category_id AND reviews.store_id=stores.id AND menus.store_id = stores.id
    AND stores.address LIKE ("%"?"%")
    AND categories.category LIKE ("%"?"%")
    AND menus.name LIKE ("%"?"%")
    LIMIT ?
	`,
    [ address, category, menu, limit ]
  );

  return result;
};

module.exports = {
  getSeperatedList,
};