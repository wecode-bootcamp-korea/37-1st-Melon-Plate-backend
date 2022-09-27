const database = require("./dataSource");

const createReview = async (
  id,
  storeId,
  text,
  rate,
  imgJSON
) => {
  const result = await database.query(
    `
    INSERT INTO reviews (user_id, store_id, text, rate, image) VALUES (?, ?, ?, ?, ?);
    `, [id, storeId, text, rate, imgJSON]
  );

  return result;
};

module.exports = {
  createReview,
};
