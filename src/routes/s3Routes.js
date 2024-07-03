const express = require('express');
const s3Controller = require('../controllers/s3Controller');
const { ROUTES } = require('../common/constants/constants');

const router = express.Router();

router.post(ROUTES.UPLOAD, s3Controller.uploadFile);
router.post(ROUTES.FETCH, s3Controller.fetchFile);

module.exports = router;
