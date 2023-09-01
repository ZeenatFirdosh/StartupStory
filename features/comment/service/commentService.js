// features/comments/controllers/commentServices.js

const Comment = require('../models/commentModel');

exports.createComment = async (user, content) => {
    try {
        const newComment = new Comment({
            user,
            commentMessage:content,
        });
        return await newComment.save();
    } catch (error) {
        throw error;
    }
};

exports.getComments = async () => {
    try {
        return await Comment.find().sort({ createdAt: -1 });
    } catch (error) {
        throw error;
    }
};

exports.getCommentById = async (commentId) => {
    try {
        return await Comment.findById(commentId);
    } catch (error) {
        throw error;
    }
};

exports.updateComment = async (commentId, content) => {
    try {
        return await Comment.findByIdAndUpdate(commentId, {commentMessage: content }, { new: true });
    } catch (error) {
        throw error;
    }
};

exports.deleteComment = async (commentId) => {
    try {
        return await Comment.findByIdAndDelete(commentId);
    } catch (error) {
        throw error;
    }
};
