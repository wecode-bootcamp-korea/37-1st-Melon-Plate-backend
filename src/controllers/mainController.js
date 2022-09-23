const { mainService } = require("../services");
const { catchAsync } = require("../middlewares");

const getSearchResult = catchAsync(async (req, res, next) => {
  const { query } = req.query;

  const result = await mainService.getSearchResult(query);

  return res.status(200).json({ 
    message : `query "${query}" result`,
    data : result 
  });
});

module.exports = {
  getSearchResult,
};
