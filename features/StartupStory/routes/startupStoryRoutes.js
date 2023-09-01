// features/startupStory/routes/startupStoryRoutes.js

const express = require('express');
const router = express.Router();
const authMiddleware = require('../../authentication/middleware/authMiddleware');
const startupStoryController = require('../controllers/startupStoryController');

router.post('/', authMiddleware, startupStoryController.createStartupStory);
router.get('/', startupStoryController.getStartupStories);
router.get('/:id', startupStoryController.getStartupStoryById);
router.patch('/:id', authMiddleware, startupStoryController.updateStartupStory);
router.delete('/:id', authMiddleware, startupStoryController.deleteStartupStory);

module.exports = router;
