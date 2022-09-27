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

module.exports = {
getStore
  };
  