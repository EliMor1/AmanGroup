const AWS = require('aws-sdk');
const fs = require('fs');
const path = require('path');


AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION
});

const s3 = new AWS.S3();

const uploadFile = async (bucketName, filePath) => {
    const fileContent = fs.readFileSync(path.join(__dirname, '..', 'files', filePath));

    const params = {
    Bucket: bucketName,
    Key: path.basename(filePath),
    Body: fileContent,
    ContentType: 'application/json'
  };

  return s3.upload(params).promise();
};

const fetchFile = async (bucketName, fileName) => {
  const params = {
    Bucket: bucketName,
    Key: fileName
  };
  return s3.getObject(params).promise();
};


module.exports = {
  uploadFile,
  fetchFile,
};
