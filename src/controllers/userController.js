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
    const err = new Error("CONFIRM INPUT ID OR PASSWORD");
    err.statusCode = 400;
    throw err;
  }

  const result = await userService.signIn(userId, password);

  return res.status(200).json(result);
});

const getAdmin = catchAsync(async (req, res, next) => {
  const { admin, id } = req;
  const userId = id;

  if (!admin) {
    const err = new Error("CONFIRM ADMIN_USER LOGIN");
    err.statusCode = 400;
    throw err;
  }

  const result = await userService.getAdmin(userId);

  return res.status(200).json(result);
});

const getProfile = catchAsync(async (req, res, next) => {
  const { id } = req;

  if (!id) {
    const err = new Error("REQUIRE_USER_LOGIN");
    err.statusCode = 400;
    throw err;
  }

  const result = await userService.getProfile(id);

  return res.status(200).json(result);
});

const updateProfile = catchAsync(async (req, res, next) => {
  const { id } = req;
  const { nickname,gender,age } = req.body;

  
  console.log(id,nickname,gender,age)
  let profileImg = req.file ? req.file.location : NULL;
  
  if (!id) {
    const err = new Error("INVAILD USER ACCESS");
    err.statusCode = 400;
    throw err;
  }

  const result = userService.updateProfile(nickname,gender,age,profileImg,id)
  
  return res.status(200).json({ message: `UPDATE COMPLEATE!` });
});

module.exports = {
  getUserSignUp,
  signIn,
  getAdmin,
  getProfile,
  updateProfile,
};
