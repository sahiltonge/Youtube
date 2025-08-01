const express = require('express');
const router = express.Router();
const { signUp, signIn, getUserProfile } = require('../Controllers/userController');
const authentication = require('../authentication');

router.post('/signup', signUp);
router.post('/signin', signIn);
router.get('/profile', authentication, getUserProfile);

module.exports = router;
