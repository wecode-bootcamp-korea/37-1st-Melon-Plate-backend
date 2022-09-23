const { listService } = require("../services");
const { catchAsync } = require("../middlewares");

const getListResult = catchAsync(async (req, res, next) => {
  const { query } = req.query;

  const result = await listService.getListResult(query);

  return res.status(200).json({ 
    message : `query '${query}' result`,
    data : result 
  });
});

module.exports = {
  getListResult,
};
