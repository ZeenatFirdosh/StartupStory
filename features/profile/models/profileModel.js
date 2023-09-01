// models/profile.js

const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true,
    },
    firstName: {
        type: String,
        required: false,
    },
    lastName: {
        type: String,
        required: false,
    },
    followers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Profile', // Reference the Profile model
    }],
    following: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Profile', // Reference the Profile model
    }],
    storyPost: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'StartupStory', // Reference the StartupStory model
    }],
    interests: [String],
    position: String,
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
