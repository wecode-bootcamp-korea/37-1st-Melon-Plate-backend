const { storeService } = require("../services");
const { catchAsync } = require("../middlewares");

const createStore = catchAsync(async (req, res, next) => {
    

    const {
        body :{
            
            name, 
            description,
            address,
            tel,
            open_time,
            closed_time,
            closed_day_id,
            category_id
        },
        file,
        id,
        user_id
    } = req
    console.log("컨트롤러==================",id,user_id,file)
    let image = (file) ? file.location : "NULL"
  
    if (!name || !description || !address || !tel || !category_id) {
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
        image,
        category_id

    );
  
    res.status(201).json({ message: `${name} created!` });
  });

  module.exports = {
    createStore,
    };
  