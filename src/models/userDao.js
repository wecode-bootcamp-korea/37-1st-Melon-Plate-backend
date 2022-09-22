const database = require("./dataSource");

const createUser = async (
  userId,
  nickname,
  gender,
  hashedPw,
  profileImg,
  age
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
      age
    ) VALUES (?, ?, ?, ?, ?, ?)
    `,
    [userId, nickname, gender, hashedPw, profileImg, age]
  );

  return result;
};

module.exports = {
  createUser,
};
