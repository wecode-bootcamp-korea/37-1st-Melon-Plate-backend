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

  err.statusCode = err.statusCode || 500;

  res.status(err.statusCode).json({ message: err.message });
};

module.exports = { catchAsync, globalErrorHandler };
