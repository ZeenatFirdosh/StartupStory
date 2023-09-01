// features/startupStory/controllers/startupStoryServices.js

const StartupStory = require('../models/startupStoryModel');





exports.createStartupStory = async (title, content, author, tags, categories, images, linkedItems) => {
    try {
        const newStartupStory = new StartupStory({
            title,
            content,
            author,
            tags,
            categories,
            images,
            linkedItems,
        });
        return await newStartupStory.save();
    } catch (error) {
        throw error;
    }
};

exports.getStartupStories = async () => {
    try {
        return await StartupStory.find().sort({ createdAt: -1 });
    } catch (error) {
        throw error;
    }
};

exports.getStartupStoryById = async (storyId) => {
    try {
        return await StartupStory.findById(storyId);
    } catch (error) {
        throw error;
    }
};

exports.updateStartupStory = async (storyId, title, content, linkedItems) => {
    try {
        return await StartupStory.findByIdAndUpdate(storyId, { title, content, linkedItems }, { new: true });
    } catch (error) {
        throw error;
    }
};

exports.deleteStartupStory = async (storyId) => {
    try {
        return await StartupStory.findByIdAndDelete(storyId);
    } catch (error) {
        throw error;
    }
};
