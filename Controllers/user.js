const User = require('../Modals/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.signUp = async (req, res) => {
  try {
    const { channelName, userName, about, profilePic, password } = req.body;
    const isExist = await User.findOne({ userName });

    if (isExist) {
      return res.status(400).json({ error: "Username already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      channelName,
      userName,
      about,
      profilePic,
      password: hashedPassword
    });

    const token = jwt.sign({ userId: user._id }, "Its_My_Secret_Key");
    res.cookie("token", token, { httpOnly: true });

    res.status(201).json({ success: true, user });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.login = async (req, res) => {
  try {
    const { userName, password } = req.body;
    const user = await User.findOne({ userName });

    if (!user) {
      return res.status(401).json({ error: "Invalid username or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid username or password" });
    }

    const token = jwt.sign({ userId: user._id }, "Its_My_Secret_Key");
    res.cookie("token", token, { httpOnly: true });

    res.status(200).json({ success: true, user });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getChannelDetails = async (req, res) => {
  try {
    const userId = req.user._id;
    const user = await User.findById(userId).select('-password');
    res.status(200).json({ success: true, user });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};
