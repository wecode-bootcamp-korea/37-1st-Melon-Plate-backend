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

const signIn = async ( userId ) => {
  try {
      const [user] = await database.query(
          `SELECT
              *
          FROM users
          WHERE user_id = ? `,
          [userId]
      );
      console.log("유저===========",user)
      return user;
  } catch (err) {
      const error = new Error(`INVALID_DATA_INPUT`);
      error.statusCode = 500;
      throw error;
  }
}

const getAdmin = async (id) => {
  console.log(id)
  const result = await database.query(
    `SELECT 
            *
        FROM stores, users
        WHERE users.id = stores.admin_user_id AND users.id=?
        `,
    [id]
   
  );
  return result;
}

module.exports = {
  createUser, signIn, getAdmin,
};
