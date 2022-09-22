const catchAsync = (asyncFn) => {
  return async (req, res, next) => {
    try {
      await asyncFn(req, res, next);
    } 
    catch (err) {
      next(err);
    }
  };
};

module.exports = { catchAsync };
