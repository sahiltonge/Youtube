const Video = require('../Modals/video');

exports.uploadVideo = async (req, res) => {
  try {
    const { title, description, videoLink, videoType, thumbnail } = req.body;

    const videoUpload = await Video.create({
      title,
      description,
      videoLink,
      videoType,
      thumbnail,
      user: req.user._id
    });

    res.status(201).json({ success: true, videoUpload });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getAllVideo = async (req, res) => {
  try {
    const videos = await Video.find().populate('user', 'channelName profilePic userName createdAt');
    res.status(200).json({ success: true, videos });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getVideoById = async (req, res) => {
  try {
    const { id } = req.params;
    const video = await Video.findById(id).populate('user', 'channelName profilePic');
    res.status(200).json({ success: true, video });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getAllVideoByUserID = async (req, res) => {
  try {
    const { userId } = req.params;
    const video = await Video.find({ user: userId }).populate('user', 'channelName profilePic userName createdAt about');
    res.status(200).json({ success: true, video });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
