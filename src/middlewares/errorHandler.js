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

const globalErrorHandler = (err, req, res, next) => {
  console.error(err.stack);

  res
    .status(err.status || 500)
    .json({ 
      message: err.message,
      error: err
    });
};

module.exports = { catchAsync, globalErrorHandler };
