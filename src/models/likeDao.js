const database = require("./dataSource");

const likeEx = async (id, store_id) => {
    let result = await database.query(
      `
      SELECT * FROM 
      likes  
      WHERE user_id =?
      AND store_id =?
      `,
      [id, store_id]
    );
    
    return result;
  };

const inputLikeStore = async (id, store_id) => {
  return await database.query(
    `
    INSERT INTO 
    likes (user_id,store_id) 
    VALUES (?,?)
    `,
    [id, store_id]
  );
};

const undoLikeStore = async (id, store_id) => {
    return await database.query(
      `
      DELETE FROM
      likes
      WHERE user_id=? AND store_id=?
      `,
      [id, store_id]
    );
  };

module.exports = { inputLikeStore,likeEx,undoLikeStore };
