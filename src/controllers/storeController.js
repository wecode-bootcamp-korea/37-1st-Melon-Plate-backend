const { storeService } = require("../services");
const { catchAsync } = require("../middlewares/");

const createStore = catchAsync(async (req, res, next) => {
    console.log(req.body,req.file)

    const {
        body :{
            user_id,
            name, 
            description,
            address,
            tel,
            open_time,
            closed_time,
            closed_day_id
        },
        file
    } = req
    
    let image = (file) ? file.location : NULL;
  
    if (!name || !description || !address || !tel ) {
      const error = new Error("필수정보를 확인해주세요");
      error.statusCode = 400;
      throw error;
    }
  
    await storeService.createStore(
        user_id,
        name, 
        description,
        address,
        tel,
        open_time,
        closed_time,
        closed_day_id
    );
  
    res.status(201).json({ message: `Welcome ${nickname}!` });
  });

  module.exports = {
    createStore,
    };
  