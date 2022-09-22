const { uploadFiles } = require("./uploadFiles");
const { validators } = require("./validators");
const { catchAsync, globalErrorHandler } = require("./errorHandler");

module.exports = {
  uploadFiles,
  validators,
  catchAsync, 
  globalErrorHandler,
};
