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
  const user = await userDao.getUserById(userId);
  isMatched = await bcrypt.compare(password, user.password);
 if(!isMatched) {
      const err = new Error(`user information not undefiened.`);
      err.statusCode = 400; 
      throw err;
  }
  const jwtToken = jwt.sign({id:user.id, user_id:user.user_id, admin:user.admin}, process.env.KEY);
  return {
    accessToken : jwtToken,
    admin : user.admin
}
}
const getAdmin = async (id) => {
  const result = await userDao.getAdminUser(id);
  return result
}


module.exports = {
  getUserSignUp, signIn, getAdmin,
};
