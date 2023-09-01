// features/comments/controllers/commentController.js

const commentServices = require('../service/commentService');

exports.createComment = async (req, res, next) => {
    try {
        const { content } = req.body;
        const user = req.params.userId;

        const newComment = await commentServices.createComment(user, content);
        res.json(newComment);
    } catch (error) {
        next(error);
    }
};

exports.getComments = async (req, res, next) => {
    try {
        const comments = await commentServices.getComments();
        res.json(comments);
    } catch (error) {
        next(error);
    }
};

exports.getCommentById = async (req, res, next) => {
    try {
        const commentId = req.params.id;
        const comment = await commentServices.getCommentById(commentId);
        if (!comment) {
            return res.status(404).json({ error: 'Comment not found' });
        }
        res.json(comment);
    } catch (error) {
        next(error);
    }
};

exports.updateComment = async (req, res, next) => {
    try {
        const commentId = req.params.id;
        const { content } = req.body;

        const updatedComment = await commentServices.updateComment(commentId, content);
        if (!updatedComment) {
            return res.status(404).json({ error: 'Comment not found' });
        }

        res.json(updatedComment);
    } catch (error) {
        next(error);
    }
};

exports.deleteComment = async (req, res, next) => {
    try {
        const commentId = req.params.id;

        const deletedComment = await commentServices.deleteComment(commentId);
        if (!deletedComment) {
            return res.status(404).json({ error: 'Comment not found' });
        }

        res.json({ message: 'Comment deleted successfully' });
    } catch (error) {
        next(error);
    }
};
