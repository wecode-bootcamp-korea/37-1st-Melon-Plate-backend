const { storeService } = require("../services");
const { catchAsync } = require("../middlewares");

const createStore = catchAsync(async (req, res, next) => {
    

    const {
        body :{
            id,
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
    console.log("컨트롤러==================",user_id,file)
    let image = (file) ? file.location : "NULL"
  
    if (!name || !description || !address || !tel ) {
      const error = new Error("필수정보를 확인해주세요");
      error.statusCode = 400;
      throw error;
    }
  
    await storeService.createStore(
        id,
        user_id,
        name, 
        description,
        address,
        tel,
        open_time,
        closed_time,
        closed_day_id,
        image
    );
  
    res.status(201).json({ message: `${name} created!` });
  });

  module.exports = {
    createStore,
    };
  