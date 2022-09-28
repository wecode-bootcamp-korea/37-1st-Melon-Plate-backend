const multer = require("multer");
const AWS = require("aws-sdk");
const multerS3 = require("multer-s3");
const path = require("path");

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_AK_ID,
  secretAccessKey: process.env.AWS_SK_PW,
  region: "ap-northeast-2",
});

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "zweiundzwanzig",
    acl: "public-read",
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key(req, file, cb) {
      const ext = path.extname(file.originalname);
      cb(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { fileSize: 2 * 1024 * 1024 },
});

const upload2 = multer();

module.exports = {
  upload,
  upload2,
};
