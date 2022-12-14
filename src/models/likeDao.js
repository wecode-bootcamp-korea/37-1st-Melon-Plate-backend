const database = require("./dataSource");

const getLikesByUserIdAndStoreId = async (id, store_id) => {
    let result = await database.query(
      `
      SELECT 
      *
      FROM likes  
      WHERE user_id =? AND store_id =?
      `,
      [id, store_id]
    );
    
    return result;
  };

const createLikeToStore  = async (id, store_id) => {
  return await database.query(
    `
    INSERT INTO likes (
    user_id,
    store_id
    ) 
    VALUES (?,?)
    `,
    [id, store_id]
  );
};

const deleteLikeToStore = async (id, store_id) => {
    return await database.query(
      `
      DELETE FROM
      likes
      WHERE user_id=? AND store_id=?
      `,
      [id, store_id]
    );
  };

module.exports = { createLikeToStore ,getLikesByUserIdAndStoreId,deleteLikeToStore };
