const { userService } = require("../services");
const { catchAsync } = require("../middlewares");

const { BaseError } = require("../utils/error")

const signUp = catchAsync(async (req, res, next) => {
  const {
    body: { userId, nickname, password, age, gender, admin },
    file,
  } = req;

  let profileImg = file ? file.location : NULL;

  if (!userId || !nickname || !password || !age) throw new BaseError("KEY_ERROR", 400);

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
  
  if (!userId || !password) throw new BaseError("KEY_ERROR", 400)
  
  const result = await userService.signIn(userId, password);
  
  return res.status(200).json(result);
});

module.exports = {
  signUp,
  signIn,
};
