const multer = require('multer');
const AWS = require('aws-sdk');
const multerS3 = require('multer-s3');
const path = require('path');

const s3 = new AWS.S3({
	accessKeyId: process.env.AWS_ID,
	secretAccessKey: process.env.AWS_PW,
	region: 'ap-northeast-2'
});

const upload = multer({
    //* 저장공간
    // s3에 저장
    storage: multerS3({
       // 저장 위치
       s3: s3,
       bucket: 'wecode37',
       acl: "public-read",
       contentType: multerS3.AUTO_CONTENT_TYPE,
       key(req, file, cb) {
          cb(null, `${Date.now()}_${path.basename(file.originalname)}`) // original 폴더안에다 파일을 저장
       },
    }),
    //* 용량 제한
    limits: { fileSize: 10 * 1024 * 1024 },
 });


 const upload2 = multer();

module.exports = {upload, upload2}
