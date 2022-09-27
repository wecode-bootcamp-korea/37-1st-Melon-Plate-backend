
const { catchAsync } = require("../middlewares");

const returnImageUrl = catchAsync(async( req, res, next )=> {
let image = await req.file
let imageUrl = await image.location

res.status(200).json({imageUrl});

})

module.exports = {
    returnImageUrl
  };
  