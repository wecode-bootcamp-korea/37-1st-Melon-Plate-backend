const database = require("./dataSource");

const getStore = async (id, store_id) => {
  console.log(id, store_id);
  let getStore = await database.query(
    `SELECT stores.name, 
    stores.image, 
    stores.description,
    stores.address,
    stores.tel,
    stores.open_time,
    stores.closed_time,
    stores.price_range,
    categories.category, 
    stores.view_count, 
    stores.create_at FROM stores 
    JOIN categories ON stores.id = categories.id 
    WHERE stores.id = ? `,
    [store_id]
  );
  return getStore;
};

const increseCount = async (store_id) => {
  let increseCount = await database.query(
    `UPDATE 
    stores 
    SET view_count = view_count + 1 
    WHERE id = ?`,
  [store_id]
    )
    return increseCount;
}

const getStoreReviews = async (store_id) => {
  let getStoreReviews = await database.query(
    `SELECT
     r.id,
     r.text AS reviewText,
     r.rate,
     u.id AS user_id,
     u.nickname,
     u.profile_image AS profileImg,
     r.create_at AS reviewDate
     FROM reviews r
     JOIN stores s ON s.id = r.store_id
    JOIN users u ON u.id = r.user_id 
    WHERE r.store_id = ? `,
    [store_id]
  );
  return getStoreReviews;
};

const getReviewImages = async (store_id) => {
  let getReviewImages = await database.query(
    `SELECT review_images.review_id,
    review_images.image AS reviewImg
    FROM reviews 
    LEFT JOIN review_images 
    ON reviews.id = review_images.review_id where reviews.store_id=? 
    AND review_images.id IS NOT NULL;`,
    [store_id]
  );
  return getReviewImages;
};

const getStoreMenus = async (store_id) => {
  let getStoreMenus = await database.query(
    `SELECT name,price 
  from menus 
  WHERE store_id=?
  `,
    [store_id]
  );
  return getStoreMenus;
};

module.exports = {
  getStore,
  increseCount,
  getStoreMenus,
  getStoreReviews,
  getReviewImages,
};
