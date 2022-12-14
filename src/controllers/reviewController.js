const { reviewService } = require("../services");
const { catchAsync } = require("../middlewares");

const postNewReview = catchAsync(async (req, res, next) => {
  const {
    params: { storeId },
    body: { text, rate },
    files,
    id,
  } = req;

  if (!storeId || !text || !rate) {
    const error = new Error("Please write your comments");
    error.statusCode = 400;
    throw error;
  }
  let imgArr = files ? new Array() : "";

  for (let file in files) imgArr.push(files[file].location);

  const result = await reviewService.postNewReview(
    +id,
    +storeId,
    +rate,
    text,
    imgArr
  );

  res.status(200).json({
    message: "THANKS!",
    data: result,
  });
});

module.exports = {
  postNewReview,
};
