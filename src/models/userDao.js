<<<<<<< HEAD
const  {database} = require("./dataSource");
=======
const database = require("./dataSource");
>>>>>>> 4605aa1c3ce1baa7c3337fb00fbeaaaf19f3ce6f

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

<<<<<<< HEAD
  const newUser = await database.query(
=======
  const result = await database.query(
>>>>>>> 4605aa1c3ce1baa7c3337fb00fbeaaaf19f3ce6f
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

<<<<<<< HEAD
  return newUser;
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
      return user;
  } catch (err) {
      const error = new Error(`INVALID_DATA_INPUT`);
      error.statusCode = 500;
      throw error;
  }
}


module.exports = {
  createUser, signIn
=======
  return result;
};

module.exports = {
  createUser,
>>>>>>> 4605aa1c3ce1baa7c3337fb00fbeaaaf19f3ce6f
};
