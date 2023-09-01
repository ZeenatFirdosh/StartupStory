// features/user/routes/userRoutes.js

const express = require('express');
const router = express.Router();
const authMiddleware = require('../../authentication/middleware/authMiddleware');
const profileController = require('../controllers/profileController');

// Get user's profile
router.get('/', authMiddleware, profileController.getProfile);

// Update user's profile
router.patch('/', authMiddleware, profileController.updateProfile);

// Follow a profile
router.post('/follow', authMiddleware, profileController.followProfile);

// Unfollow a profile
router.post('/unfollow', authMiddleware, profileController.unfollowProfile);

module.exports = router;
