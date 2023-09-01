// features/replies/controllers/replyController.js

const replyServices = require('../service/replyService');

exports.createReply = async (req, res, next) => {
    try {
        const { content } = req.body;
        const user = req.userData.userId;
        const parentComment = req.params.commentId; // Comment ID the reply belongs to

        const newReply = await replyServices.createReply(user, content, parentComment);
        res.json(newReply);
    } catch (error) {
        next(error);
    }
};

exports.getRepliesForComment = async (req, res, next) => {
    try {
        const commentId = req.params.commentId; // Comment ID to get replies for
        const replies = await replyServices.getRepliesForComment(commentId);
        res.json(replies);
    } catch (error) {
        next(error);
    }
};

exports.updateReply = async (req, res, next) => {
    try {
        const replyId = req.params.id;
        const { content } = req.body;

        const updatedReply = await replyServices.updateReply(replyId, content);
        if (!updatedReply) {
            return res.status(404).json({ error: 'Reply not found' });
        }

        res.json(updatedReply);
    } catch (error) {
        next(error);
    }
};

exports.deleteReply = async (req, res, next) => {
    try {
        const replyId = req.params.id;

        const deletedReply = await replyServices.deleteReply(replyId);
        if (!deletedReply) {
            return res.status(404).json({ error: 'Reply not found' });
        }

        res.json({ message: 'Reply deleted successfully' });
    } catch (error) {
        next(error);
    }
};
