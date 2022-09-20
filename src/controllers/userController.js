const { userService } = require("../services");
const { catchAsync } = require("../middlewares/");

const getUserSignUp = catchAsync(async (req, res, next) => {
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

module.exports = {
  getUserSignUp,
};
