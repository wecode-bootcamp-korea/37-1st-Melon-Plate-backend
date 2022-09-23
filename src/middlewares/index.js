const { uploadFiles } = require("./uploadFiles");
const { validators } = require("./validators");
const { auth } = require("./auth");
const { catchAsync, globalErrorHandler } = require("./errorHandler");

module.exports = {
  uploadFiles,
  validators,
  auth,
  catchAsync, 
  globalErrorHandler,
};
