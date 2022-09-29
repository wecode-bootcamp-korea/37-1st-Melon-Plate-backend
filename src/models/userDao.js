const database = require("./dataSource");

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

const getUserById = async (userId) => {
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
};

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
    [userId]
  );
  return result;
};

const getRateAverage = async () => {
  const result = await database.query(
    `
    SELECT
      stores.id,
      FORMAT(AVG(rate),2) AS rate_average
    FROM reviews
    JOIN stores ON reviews.store_id=stores.id
    GROUP BY stores.id 
    `
  );
  return result;
};

const getOffdays = async () => {
  const result = await database.query(
    `SELECT
    stores.id,
    days.day
    FROM stores
    JOIN off_days ON stores.id=off_days.store_id
    JOIN days ON off_days.day_id = days.id
    `
  );
  return result;
};

const getProfileById = async (id) => {
  const result = await database.query(
    `SELECT 
  user_id, 
  nickname, 
  age, 
  gender, 
  profile_image, 
  create_at 
  FROM users 
  WHERE users.id=?
  `,
    [id]
  );
  return result;
};

const getReviewsById = async (id) => {
  const result = await database.query(
    `SELECT stores.id AS stores_id, 
    stores.name, 
    stores.address, 
    reviews.text, 
    reviews.rate 
    FROM stores 
    JOIN reviews 
    ON reviews.store_id=stores.id 
    JOIN users 
    ON reviews.user_id = users.id 
    WHERE users.id=?;
  `,
    [id]
  );
  return result;
};

const getLikesById = async (id) => {
  const result = await database.query(
    `select 
    stores.id AS stores_id, 
    stores.name, 
    stores.address 
    from stores 
    JOIN likes ON likes.store_id=stores.id 
    JOIN users ON likes.user_id = users.id 
    WHERE users.id=?
    `,
    [id]
  );
  return result;
};

const updateProfile = async (nickname,gender,age,profileImg,id) => {
  const result = await database.query(
    `UPDATE users
    SET nickname=?, 
    gender=?, 
    age=?,
    profile_image=?
    WHERE id = ? `,
    [nickname, gender, age, profileImg, id]
  );
  return result;
};

module.exports = {
  createUser,
  getUserById,
  getAdminUser,
  getRateAverage,
  getOffdays,
  getProfileById,
  getLikesById,
  getReviewsById,
  updateProfile,
};
