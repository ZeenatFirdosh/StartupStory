const mongoose = require('mongoose');

// write a comment and reply model

const commentSchema = new mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference the User model
        required: true,
    },
    commentMessage: {
        type: String,
        required: true,
    },
    StartupStoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'StartupStory', // Reference the User model
        required: true,
    },
    replies: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Reply', // Reference the User model
        required: false,
    }],

    createdAt: {
        type: Date,
        default: Date.now,
    },
});




const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
