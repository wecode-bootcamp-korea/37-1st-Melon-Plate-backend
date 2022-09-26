const database = require("./dataSource");

const getStore = async (id,store_id) => {
  let getStore = await database.query(
    `SELECT stores.name, stores.image, 
    stores.description,
    stores.address,
    stores.tel,
    stores.open_time,
    stores.closed_time,
    stores.price_range,
    stores.category_id, 
    stores.view_count, 
    stores.create_at FROM stores WHERE id = ? `,
    [store_id]
  );
  return getStore
};

const getStoreReviews = async (store_id) => {
    let getStoreReviews = await database.query(
        `SELECT * FROM reviews WHERE store_id = ?`,[store_id]
    )
    return getStoreReviews;
}

const getStoreMenus = async (store_id) => {
    let getStoreMenus = await database.query(
        `SELECT * from menus`
    )
}

module.exports = {
  getStore, getStoreMenus, getStoreReviews,
};
