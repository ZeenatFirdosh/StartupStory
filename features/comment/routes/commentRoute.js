// features/comments/routes/commentRoutes.js

const express = require('express');
const router = express.Router();
const authMiddleware = require('../../authentication/middleware/authMiddleware');
const commentController = require('../controllers/commentController');

router.post('/', authMiddleware, commentController.createComment);
router.get('/', commentController.getComments);
router.get('/:id', authMiddleware,commentController.getCommentById);
router.patch('/:id', authMiddleware, commentController.updateComment);
router.delete('/:id', authMiddleware, commentController.deleteComment);

module.exports = router;
