// features/user/controllers/profileController.js

const profileServices = require('../services/profileServices');

exports.getProfile = async (req, res, next) => {
    try {
        const userId = req.body.userId;
        const userProfile = await profileServices.getProfile(userId);
        if (!userProfile) {
            return res.status(404).json({ error: 'Profile not found' });
        }
        res.json(userProfile);
    } catch (error) {
        next(error);
    }
};

exports.updateProfile = async (req, res, next) => {
    try {
        const userId = req.body.userId;
        const updatedData = req.body;
        const updatedProfile = await profileServices.updateProfile(userId, updatedData);
        if (!updatedProfile) {
            return res.status(404).json({ error: 'Profile not found' });
        }
        res.json(updatedProfile);
    } catch (error) {
        next(error);
    }
};

exports.followProfile = async (req, res, next) => {
    try {
        const userId = req.body.userId;
        const profileIdToFollow = req.body.profileId;
        await profileServices.followProfile(userId, profileIdToFollow);
        res.json({ message: 'Followed successfully' });
    } catch (error) {
        next(error);
    }
};

exports.unfollowProfile = async (req, res, next) => {
    try {
        const userId = req.body.userId;
        const profileIdToUnfollow = req.body.profileId;
        await profileServices.unfollowProfile(userId, profileIdToUnfollow);
        res.json({ message: 'Unfollowed successfully' });
    } catch (error) {
        next(error);
    }
};
