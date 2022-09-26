const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { userDao } = require("../models");
const {
  validateNickname,
  validateId,
  validatePassword,
} = require("../middlewares/validators");

const getUserSignUp = async (
  userId,
  nickname,
  gender,
  password,
  profileImg,
  age
) => {
  validateId(userId);
  validateNickname(nickname);
  validatePassword(password);

  const saltRounds = 10;
  const hashedPw = await bcrypt.hash(password, saltRounds);

  return await userDao.createUser(
    userId,
    nickname,
    gender,
    hashedPw,
    profileImg,
    age
  );
};

module.exports = {
  getUserSignUp,
};
