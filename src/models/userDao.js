const  database = require("./dataSource");

const createUser = async (
  userId,
  nickname,
  gender,
  hashedPw,
  profileImg,
  age,
  admin
) => {
  const user = await database.query(
    `SELECT 
            *
        FROM users
        WHERE users.user_id = ?
        `,
    [userId]
  );

  if (userId === user.userId) {
    const error = new Error(`${userId} is already exist`);
    error.statusCode = 400;
    throw error;
  }

  const result = await database.query(
    `INSERT INTO users(
      user_id,
      nickname,
      gender,
      password,
      profile_image,
      age,
      admin
    ) VALUES (?, ?, ?, ?, ?, ?,?)
    `,
    [userId, nickname, gender, hashedPw, profileImg, age, admin]
  );

  return result;
};

const getUserById = async ( userId ) => {
  try {
      const [user] = await database.query(
          `SELECT
              *
          FROM users
          WHERE user_id = ? `,
          [userId]
      );
      return user;
  } catch (err) {
      const error = new Error(`INVALID_DATA_INPUT`);
      error.statusCode = 500;
      throw error;
  }
}

const getAdminUser = async (userId) => {
  const result = await database.query(
    `SELECT              
    stores.id, 
    stores.name, 
    stores.image, 
    stores.description, 
    stores.address, 
    stores.tel, 
    stores.open_time, 
    stores.closed_time, 
    stores.category_id, 
    stores.view_count, 
    stores.create_at         
    FROM stores         
    JOIN users ON users.id = stores.admin_user_id
    WHERE users.id = ?
        `,
    [id]
   
  );
  return result;
}

module.exports = {
  createUser, getUserById, getAdminUser,
};
