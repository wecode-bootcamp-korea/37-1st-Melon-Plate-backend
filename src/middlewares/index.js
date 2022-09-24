const { uploadFiles } = require("./uploadFiles");
const { validators } = require("./validators");
const { catchAsync, globalErrorHandler } = require("./errorHandler");
const { upload } = require("./multer");
const { accessToken } = require("./auth");

module.exports = {
  uploadFiles,
  validators,
  catchAsync, 
  globalErrorHandler,
  upload,
  accessToken
};
