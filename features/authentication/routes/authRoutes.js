// features/authentication/routes/authRoutes.js

const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware'); // Import your auth middleware

// Public routes
router.post('/register', authController.registerUser);
router.post('/login', authController.loginUser);

// Routes that require authentication
router.post('/logout', authMiddleware, authController.logoutUser);
router.post('/refresh', authMiddleware, authController.refreshToken);
router.post('/change-password', authMiddleware, authController.changePassword);

module.exports = router;
