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

const signIn = async (userId, password) => {
  const user = await userDao.getUserById(userId);
  isMatched = await bcrypt.compare(password, user.password);
  if (!isMatched) {
    const err = new Error(`user information not undefiened.`);
    err.statusCode = 400;
    throw err;
  }
  const jwtToken = jwt.sign(
    { id: user.id, user_id: user.user_id, admin: user.admin },
    process.env.KEY
  );
  return {
    accessToken: jwtToken,
    admin: user.admin,
  };
};

const getAdmin = async (id) => {
  const result = await userDao.getAdminUser(id);
  const getRateAverage = await userDao.getRateAverage();
  const getOffdays = await userDao.getOffdays();
  for (i in getRateAverage) {
    for (j in result) {
      if (getRateAverage[i].id == result[j].id) {
        result[j].rate = getRateAverage[i].rate_average;
      }
    }
  }
  for (k in result) {
    if (!result[k].rate) {
      result[k].rate = 0;
    }
  }
  // console.log(getOffdays)
  for (i in result) {
    result[i].closed_day = "";
  }

  for (i in getOffdays) {
    for (j in result) {
      if (getOffdays[i].id == result[j].id) {
        result[j].closed_day += getOffdays[i].day;
      }
    }
  }

  return result;
};

module.exports = {
  getUserSignUp,
  signIn,
  getAdmin,
};
