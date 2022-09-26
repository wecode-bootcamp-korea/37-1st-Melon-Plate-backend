const { userService } = require("../services");
const { catchAsync } = require("../middlewares");

const getUserSignUp = catchAsync(async (req, res, next) => {
  
  const {
    body: { userId, nickname, password, age, gender, admin },
    file,
  } = req;
  
  let profileImg = file ? file.location : NULL;

  if (!userId || !nickname || !password || !age) {
    const error = new Error("Please write your Info");
    error.statusCode = 400;
    throw error;
  }
  await userService.getUserSignUp(
    userId,
    nickname,
    gender,
    password,
    profileImg,
    age,
    admin
  );

  res.status(201).json({ message: `Welcome ${nickname}!` });
});

const signIn = catchAsync(async (req, res, next) => {

  const { userId, password } = req.body;

  if (!userId || !password) {
    const err = new Error("아이디나 비밀번호가 입력되지않았습니다");
    err.statusCode = 400;
    throw err;
  }
  const result = await userService.signIn(userId, password);
  return res.status(200).json(result);
});

const getAdmin = catchAsync(async (req, res, next) => {
  let { admin, id, user_id } = req;
  if (!admin) {
    const err = new Error("관리자 계정 로그인이 필요합니다");
    err.statusCode = 400;
    throw err;
  }
  const result = await userService.getAdmin(id);
  return res.status(200).json(result);
});

module.exports = {
  getUserSignUp,
  signIn,
  getAdmin,
};
