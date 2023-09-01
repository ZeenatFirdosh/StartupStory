// features/replies/controllers/replyServices.js

const Reply = require('../models/replyModel');

exports.createReply = async (user, content, parentComment) => {
    try {
        const newReply = new Reply({
            user,
            replyMessage: content,
            parentComment,
        });
        return await newReply.save();
    } catch (error) {
        throw error;
    }
};

exports.getRepliesForComment = async (commentId) => {
    try {
        return await Reply.find({ parentComment: commentId }).sort({ createdAt: 1 });
    } catch (error) {
        throw error;
    }
};

exports.updateReply = async (replyId, content) => {
    try {
        return await Reply.findByIdAndUpdate(replyId, { content }, { new: true });
    } catch (error) {
        throw error;
    }
};

exports.deleteReply = async (replyId) => {
    try {
        return await Reply.findByIdAndDelete(replyId);
    } catch (error) {
        throw error;
    }
};
