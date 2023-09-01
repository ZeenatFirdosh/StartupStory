// features/replies/models/reply.js

const mongoose = require('mongoose');

const replySchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    replyMessage: {
        type: String,
        required: true,
    },
    parentComment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment', // Reference to the Comment model
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Reply = mongoose.model('Reply', replySchema);

module.exports = Reply;
