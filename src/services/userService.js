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

const signIn = async ( userId, password ) => {
  const user = await userDao.signIn(userId);
  const checkHash = async (password, hashedPassword) => {
      return await bcrypt.compare(password, hashedPassword);
  }
  const checkPassword = await checkHash(password, user.password);
  if(!checkPassword) {
      const err = new Error(`유저 정보가 일치하지 않습니다.`);
      err.statusCode = 400; 
      throw err;
  }
  const KEY = process.env.KEY;
  const jwtToken = jwt.sign(id, KEY);
  const result = {
      accessToken : jwtToken 
       }
  return result
}


module.exports = {
  getUserSignUp, signIn
};
