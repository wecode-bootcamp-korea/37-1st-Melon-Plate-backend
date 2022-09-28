const database = require("./dataSource");

const createReview = async (
  // id,
  storeId,
  rate,
  text
) => {
  const result = await database.query(
    `
    INSERT INTO reviews (
      user_id, 
      store_id, 
      text, 
      rate
    ) VALUES (1, ?, ?, ?)`,
    [storeId, text, rate]
  );

  return result.insertId;
};

const createReviewImage = async (rowImage) => {
  // let rowImg = "";
  // rowImage.map((img) => rowImg = rowImg + "(" + newReviewInsertId + "," +  toString(img) + ")" + ",");
  // rowImg.slice(0,-1);

  const result = await 

  // imgArr.map((img) => {
    database.query(
      `
      INSERT INTO review_images (
        review_id,
        image
      ) VALUES ?
      `, [rowImage]
      // [imgArr.map((img) => {`(${newReviewInsertId},${img}),`;})]
        // [rowImage]

    );
  // });
  return result;
};

module.exports = {
  createReview,
  createReviewImage,
};


// (452,"https://zweiundzwanzig.s3.ap-northeast-2.amazonaws.com/aws1664351089202.png"),(452,"https://zweiundzwanzig.s3.ap-northeast-2.amazonaws.com/DB1664351089206.png"),(452,"https://zweiundzwanzig.s3.ap-northeast-2.amazonaws.com/HTTP1664351089240.png")