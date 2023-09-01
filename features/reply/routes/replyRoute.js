// features/replies/routes/replyRoutes.js

const express = require('express');
const router = express.Router();
const authMiddleware = require('../../authentication/middleware/authMiddleware');
const replyController = require('../controllers/replyController');

router.post('/create/:commentId', authMiddleware, replyController.createReply);
router.get('/list/:commentId', replyController.getRepliesForComment);
router.patch('/:id', authMiddleware, replyController.updateReply);
router.delete('/:id', authMiddleware, replyController.deleteReply);

module.exports = router;
