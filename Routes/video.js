const express = require('express');
const router = express.Router();
const {
  uploadVideo,
  getAllVideo,
  getVideoById,
  getAllVideoByUserID
} = require('../Controllers/videoController');
const authentication = require('../authentication');

router.post('/upload', authentication, uploadVideo);
router.get('/all', getAllVideo);
router.get('/:id', getVideoById);
router.get('/user/:userId', getAllVideoByUserID);

module.exports = router;
