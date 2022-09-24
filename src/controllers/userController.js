const { userService } = require("../services");
const { catchAsync } = require("../middlewares/");

const getUserSignUp = catchAsync(async (req, res, next) => {
  console.log(req)
  let profileImg = "null";
  const {
    body: { userId, nickname, password, age, gender },
    file,
  } = req;

  if (file) profileImg = file.path;

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
    age
  );

  res.status(201).json({ message: `Welcome ${nickname}!` });
});

const signIn = catchAsync(async (req, res, next) => {
  console.log("asdasdasdasdsad======",req.body)
  const { userId, password } = req.body;
  console.log(userId, password)
  if ( !userId || !password ) {
      const err = new Error("아이디나 비밀번호가 입력되지않았습니다");
      err.statusCode = 400;
      throw err
  }
  const result = await userService.signIn( userId, password );
  return res.status(200).json(result);
})

module.exports = {
  getUserSignUp, signIn
  };
