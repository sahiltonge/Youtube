const Comment = require('../Modals/comment');

exports.addComment = async (req, res) => {
  try {
    const { commentText, videoId } = req.body;

    const comment = await Comment.create({
      commentText,
      videoId,
      user: req.user._id
    });

    res.status(201).json({ success: true, comment });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getCommentByVideoId = async (req, res) => {
  try {
    const { videoId } = req.params;
    const comments = await Comment.find({ videoId }).populate('user', 'channelName profilePic userName');
    res.status(200).json({ success: true, comments });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
