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
  age,
  admin
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
    age,
    admin
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

  const jwtToken = jwt.sign({ id: user.id, user_id: user.user_id, adminTF: user.admin},process.env.KEY);
  const result = {
      accessToken : jwtToken,
      admin : user.admin
       }
  return result
}

const getAdmin = async (userId) => {
  const result = await userDao.getAdmin(userId);
  return 
}


module.exports = {
  getUserSignUp, signIn, getAdmin,
};
