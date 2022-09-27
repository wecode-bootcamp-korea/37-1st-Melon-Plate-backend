const { likeService } = require("../services");
const { catchAsync } = require("../middlewares");

const likeStore = catchAsync(async(req,res,next)=>{

    const {storeId} = req.params
    const {id} = req
    let result = await likeService.likeStore(
        id,
        storeId
      );
      res.status(201).json(result)
}
)
module.exports = {
    likeStore
  };
  