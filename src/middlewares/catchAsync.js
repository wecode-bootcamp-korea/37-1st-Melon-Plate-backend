const catchAsync = (asyncFn) => {
    // return Promise
    //   .then(asyncFn(req, res, next))
    //   .catch(next);
    return async (req, res, next) => {
      try {
        await asyncFn(req, res, next);
      } 
      catch (err) {
        next(err);
      };
    }
  };
  
  module.exports = { catchAsync };
