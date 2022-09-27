const { reviewService } = require("../services");
const { catchAsync } = require("../middlewares");

const postNewReview = catchAsync(async (req, res, next) => {
  const {
    body: { text, rate },
    files, file,
    params: { storeId },
  } = req;

    // if ( !storeId || !text || !rate ) {
  //   const error = new Error("Please write your comments");
  //   error.statusCode = 400;
  //   throw error;
  // }
  // let img = JSON.stringify(reviewImg);
  console.log(files);
  console.log(file);
  console.log([...req.reviewImg]);
  console.log([...reviewImg]);
  console.log(req.body);
  // console.log(img);
  
  // let img = JSON.stringify(reviewImg);
  // console.log(img);
  // let img1 = JSON.parse(reviewImg);
  // console.log(img1);
  let imgArr = files ? new Array() : "";
  
  for (let i in files) imgArr.push(files[i].path);
  
  let imgJSON = JSON.stringify(imgArr);

  await reviewService.postNewReview(
    // +id,
    +storeId,
    +rate,
    text,
    imgJSON
  );

  res.status(200).json({
    message: "THANKS!",
    data: imgJSON,
  });
});

module.exports = {
  postNewReview,
};
