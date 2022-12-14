const { mainService } = require("../services");
const { catchAsync } = require("../middlewares");

const getSearchResult = catchAsync(async (req, res, next) => {
  const { query, filter, price, location, category, menu, limit, offDay } = req.query;

  const result = await mainService.getSearchResult(
    query,
    filter,
    +price,
    location,
    category, 
    menu, 
    +offDay,
    +limit,
  );

  return res.status(200).json({
    message: `query '${query}' result`,
    data: result,
  });
});

module.exports = {
  getSearchResult,
};