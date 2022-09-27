const { listService } = require("../services");
const { catchAsync } = require("../middlewares");

const getSeperatedList = catchAsync(async (req, res, next) => {
  const { address, category, menu, limit } = req.query;

  if (limit > 100) throw new Error("Too much Stores");

  if ( !address && !category && !menu ) {
    const error = new Error("THIS_PAGE_MUST_GET_KEYWORD");
    error.statusCode = 400;
    throw error;
  }

  const result = await listService.getSeperatedList(
    address,
    category,
    menu,
    +limit
  );

  res.status(201).json({ 
    message: `GET_TOP_LIST`,
    data: result,
 });
});

module.exports = {
  getSeperatedList,
};