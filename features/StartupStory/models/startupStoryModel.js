// features/startupStory/models/startupStory.js

const mongoose = require('mongoose');



const linkedItemSchema = new mongoose.Schema({
    text: String, // Text of the link or linked word
    url: String,  // URL for the link
    position: Number, // Position of the linked item in the content
});

const startupStorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment', // Reference the User model
        required: true,
    }], // Array of comments
    tags: [String],
    categories: [String],
    images: [String],
    linkedItems: [linkedItemSchema],
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const StartupStory = mongoose.model('StartupStory', startupStorySchema);

module.exports = StartupStory;
