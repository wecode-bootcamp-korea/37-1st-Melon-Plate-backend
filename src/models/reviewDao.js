const database = require("./dataSource");

const createReview = async (
  // id,
  storeId,
  rate,
  text,
  imgJSON
) => {
  const result = await database.query(
    `
    INSERT INTO reviews (user_id, store_id, text, rate, image) VALUES (1, ?, ?, ?, ?);
    `, [storeId, text, rate, imgJSON]
  );

  return result;
};

module.exports = {
  createReview,
};
