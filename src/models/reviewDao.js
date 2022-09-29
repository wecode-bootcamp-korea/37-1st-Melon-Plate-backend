const database = require("./dataSource");

const createReview = async (id, storeId, rate, text) => {
  const result = await database.query(
    `
    INSERT INTO reviews (
      user_id, 
      store_id, 
      text, 
      rate
    ) VALUES (?, ?, ?, ?)`,
    [id, storeId, text, rate]
  );

  return result.insertId;
};

const createReviewImage = async (rowImage) => {
  const result = await database.query(
    `
      INSERT INTO review_images (
        review_id,
        image
      ) VALUES ?
      `,
    [rowImage]
  );
  return result;
};

module.exports = {
  createReview,
  createReviewImage,
};
