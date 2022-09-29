const { detailService } = require("../services");
const { catchAsync } = require("../middlewares");


const getStore = catchAsync(async (req, res, next) => {
    
    const {id} = req
    let {storeId} = req.params
    let result = await detailService.getStore(
        id,
        storeId
      );
      
      res.status(201).json(result)

})

const getReviews = catchAsync(async (req, res, next) => {
  
    // const {id} = req  
    const id ="5"
  let {storeId} = req.params
  let result = await detailService.getReviews(
      id,
      storeId
    );
    
    res.status(201).json(result)

})


module.exports = {
getStore,
getReviews,
  };
  