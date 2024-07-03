const s3Service = require('../services/s3Service');

const uploadFile = async (req, res, next) => {
  try {
    const { bucketName, filePath } = req.body;
    const data = await s3Service.uploadFile(bucketName, filePath);
    res.status(200).json({ message: 'File uploaded successfully', data });
  } catch (error) {
    next(error);
  }
};

const fetchFile = async (req, res, next) => {
  try {
    const { bucketName, fileName } = req.body;
    const data = await s3Service.fetchFile(bucketName, fileName);
    res.status(200).json({ message: 'File fetched successfully', data: data.Body.toString() });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  uploadFile,
  fetchFile
};
