const { uploadFiles } = require("./uploadFiles");
const { validators } = require("./validators");
const { catchAsync, globalErrorHandler } = require("./errorHandler");
const { accessToken } = require("./auth");

module.exports = {
  uploadFiles,
  validators,
  accessToken,
  catchAsync, 
  globalErrorHandler,
};
