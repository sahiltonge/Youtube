const express = require('express');
const router = express.Router();
const {
  addComment,
  getCommentByVideoId
} = require('../Controllers/commentController');
const authentication = require('../authentication');

router.post('/add', authentication, addComment);
router.get('/:videoId', getCommentByVideoId);

module.exports = router;
