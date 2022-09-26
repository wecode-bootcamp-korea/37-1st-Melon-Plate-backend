const { reviewService } = require("../services");
const { catchAsync } = require("../middlewares");

const postNewReview = catchAsync(async (req, res, next) => {
  const {
    body: { userId, nickname, password, age, gender },
    file,
  } = req;

  let profileImg = (file) ? file.path : "NULL";

  if (!userId || !nickname || !password || !age) {
    const error = new Error("Please write your Info");
    error.statusCode = 400;
    throw error;
  }
  
  await reviewService.postNewReview(
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
  postNewReview,
};
