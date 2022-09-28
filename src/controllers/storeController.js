const { storeService } = require("../services");
const { catchAsync } = require("../middlewares");

const createStore = catchAsync(async (req, res, next) => {
  const {
    body: {
      name,
      description,
      address,
      tel,
      open_time,
      closed_time,
      closed_day_id,
      category_id,
    },
    file,
    id,
    user_id,
  } = req;

  let image = file ? file.location : "NULL";

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

const updateStore = catchAsync(async (req, res, next) => {
  const {
    body: {
      name,
      description,
      address,
      tel,
      open_time,
      closed_time,
      closed_day_id,
      category_id,
    },
    params: { storeId },
    file,
    id,
    user_id,
  } = req;
  let store_id = storeId;

  let image = file ? file.location : "NULL";

  if (!name || !description || !address || !tel || !category_id || !store_id) {
    const error = new Error("필수정보를 확인해주세요");
    error.statusCode = 400;
    throw error;
  }
  await storeService.updateStore(
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
    category_id,
    store_id
  );
  res.status(201).json({ message: `${name} updated!` });
});


const getMyStore = catchAsync(async(req,res,next)=>{
  const params: { storeId }
})

module.exports = {
  createStore,
  updateStore,
};
