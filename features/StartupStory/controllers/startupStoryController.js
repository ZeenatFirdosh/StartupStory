// features/startupStory/controllers/startupStoryController.js

const startupStoryServices = require('../services/startupStoryService');

// exports.createStartupStory = async (req, res, next) => {
//     try {
//         const { title, content } = req.body;
//         const author = req.userData.userId;
//         const newStory = await startupStoryServices.createStartupStory(title, content, author);
//         res.json(newStory);
//     } catch (error) {
//         next(error);
//     }
// };

// exports.getStartupStories = async (req, res, next) => {
//     try {
//         const stories = await startupStoryServices.getStartupStories();
//         res.json(stories);
//     } catch (error) {
//         next(error);
//     }
// };

// exports.getStartupStoryById = async (req, res, next) => {
//     try {
//         const storyId = req.params.id;
//         const story = await startupStoryServices.getStartupStoryById(storyId);
//         if (!story) {
//             return res.status(404).json({ error: 'Story not found' });
//         }
//         res.json(story);
//     } catch (error) {
//         next(error);
//     }
// };

// exports.updateStartupStory = async (req, res, next) => {
//     try {
//         const storyId = req.params.id;
//         const { title, content } = req.body;
//         const updatedStory = await startupStoryServices.updateStartupStory(storyId, title, content);
//         if (!updatedStory) {
//             return res.status(404).json({ error: 'Story not found' });
//         }
//         res.json(updatedStory);
//     } catch (error) {
//         next(error);
//     }
// };

// exports.deleteStartupStory = async (req, res, next) => {
//     try {
//         const storyId = req.params.id;
//         const deletedStory = await startupStoryServices.deleteStartupStory(storyId);
//         if (!deletedStory) {
//             return res.status(404).json({ error: 'Story not found' });
//         }
//         res.json({ message: 'Story deleted successfully' });
//     } catch (error) {
//         next(error);
//     }
// };


exports.createStartupStory = async (req, res, next) => {
    try {
        const { title, content, tags, categories, images, linkedItems } = req.body;
        const author = req.userData.userId;

        const newStory = await startupStoryServices.createStartupStory(title, content, author, tags, categories, images, linkedItems);
        res.json(newStory);
    } catch (error) {
        next(error);
    }
};

exports.getStartupStories = async (req, res, next) => {
    try {
        const stories = await startupStoryServices.getStartupStories();
        res.json(stories);
    } catch (error) {
        next(error);
    }
};

exports.getStartupStoryById = async (req, res, next) => {
    try {
        const storyId = req.params.id;
        const story = await startupStoryServices.getStartupStoryById(storyId);
        if (!story) {
            return res.status(404).json({ error: 'Story not found' });
        }
        res.json(story);
    } catch (error) {
        next(error);
    }
};

exports.updateStartupStory = async (req, res, next) => {
    try {
        const storyId = req.params.id;
        const { title, content, linkedItems } = req.body;

        const updatedStory = await startupStoryServices.updateStartupStory(storyId, title, content, linkedItems);
        if (!updatedStory) {
            return res.status(404).json({ error: 'Story not found' });
        }

        res.json(updatedStory);
    } catch (error) {
        next(error);
    }
};

exports.deleteStartupStory = async (req, res, next) => {
    try {
        const storyId = req.params.id;

        const deletedStory = await startupStoryServices.deleteStartupStory(storyId);
        if (!deletedStory) {
            return res.status(404).json({ error: 'Story not found' });
        }

        res.json({ message: 'Story deleted successfully' });
    } catch (error) {
        next(error);
    }
};